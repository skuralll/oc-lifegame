open Effect
open Effect.Deep
open Ppx_yojson_conv_lib.Yojson_conv.Primitives

type board_state = {
  width: int;
  height: int;
  board: int array array;
} [@@deriving yojson]

type _ Effect.t += GetNext : board_state -> board_state Effect.t
type _ Effect.t += IsAlive : (board_state * int * int)-> bool Effect.t
type _ Effect.t += AroundAlives : (board_state * int * int)-> int Effect.t
type _ Effect.t += SetCell : (board_state * int * int * int)-> unit Effect.t

let arounds = [|
  (-1,-1);( 0,-1);( 1,-1);
  (-1, 0);( 1, 0);
  (-1, 1);( 0, 1);( 1, 1);
  |];;

let inner_run f () =
  match_with f () {
    retc = (fun x -> x);
    exnc = (fun e -> raise e);
    effc = (fun  (type b) (eff: b t)-> 
      match eff with
        | GetNext (board) -> 
          (Some (fun (k: (b,_) continuation) -> 
            let next_board = {
              width = board.width;
              height = board.height;
              board = Array.make_matrix board.height board.width 0;
            } in
            for pos_y = 0 to board.height - 1 do
              for pos_x = 0 to board.width - 1 do
                let alive = perform(IsAlive (board, pos_x, pos_y)) in
                let arounds = perform(AroundAlives (board, pos_x, pos_y)) in
                let next_state = 
                  if alive then
                    if arounds == 2 || arounds == 3 then 1 else 0
                  else
                    if arounds == 3 then 1 else 0 in
                perform(SetCell (next_board, pos_x, pos_y, next_state))
              done
            done;
            continue k next_board
          ))
        | _ -> None
    )
  } 

let cellgame_run f = 
  let get_at board x y = 
    if x < 0 || x >= board.width || y < 0 || y >= board.height then
      0
    else
      board.board.(y).(x) in
  match_with (inner_run f) () {
    retc = (fun x -> x);
    exnc = (fun e -> raise e);
    effc = (fun  (type b) (eff: b t)-> 
      match eff with
        | IsAlive (board, pos_x, pos_y) -> 
          (Some (fun (k: (b,_) continuation) -> 
            continue k (get_at board pos_x pos_y == 1)
          ))
        | AroundAlives (board, pos_x, pos_y) -> 
          (Some (fun (k: (b,_) continuation) -> 
            let count = ref 0 in
            Array.iter (fun (dx, dy) ->
              get_at board (pos_x + dx) (pos_y + dy) 
                |> (fun x -> if x == 1 then count := !count + 1)
            ) arounds;
            continue k !count
          ))
        | SetCell (board, pos_x, pos_y, state) -> 
          (Some (fun (k: (b,_) continuation) -> 
            board.board.(pos_y).(pos_x) <- state;
            continue k ()
          ))
        | _ -> None
    )
  }

let main () =
  Dream.run
  @@ Dream.logger
  @@ Dream.router [

    (* 送られてきた内容をそのまま返す *)
    Dream.post "/echo" (fun request ->
      let%lwt body = Dream.body request in
      Dream.respond
        ~headers:["Content-Type", "application/octet-stream"]
        body);

    (* 盤面状態を受け取って次の世代の盤面状態を返す *)
    Dream.post "/step"
      (fun request ->
        let%lwt body = Dream.body request in

        let board_state =
          body
          |> Yojson.Safe.from_string
          |> board_state_of_yojson
        in
        let next_board_state = perform(GetNext board_state) in (* TODO:次の盤面を計算する *)
        
        Dream.json (Yojson.Safe.to_string (yojson_of_board_state next_board_state)));

  ]

let _ = cellgame_run main