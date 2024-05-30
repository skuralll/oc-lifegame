open Effect
open Effect.Deep
open Ppx_yojson_conv_lib.Yojson_conv.Primitives

type board_state = {
  width: int;
  height: int;
  board: int array array;
} [@@deriving yojson]

type _ Effect.t += GetNext : board_state -> board_state Effect.t

let inner_run f () =
  match_with f () {
    retc = (fun x -> x);
    exnc = (fun e -> raise e);
    effc = (fun  (type b) (eff: b t)-> 
      match eff with
        | GetNext (board) -> 
          (Some (fun (k: (b,_) continuation) -> 
            continue k board
          ))
        | _ -> None
    )
  } 

let cellgame_run f = 
  match_with (inner_run f) () {
    retc = (fun x -> x);
    exnc = (fun e -> raise e);
    effc = (fun  (type b) (eff: b t)-> 
      match eff with
        | GetNext (board) -> 
          (Some (fun (k: (b,_) continuation) -> 
            continue k board
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