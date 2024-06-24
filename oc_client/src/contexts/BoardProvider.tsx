import { createContext, useState } from 'react';
import { BoardState } from '../types/BoardState';
import { getAdvancedBoard } from '../lib/api-connector';
import { createNumMatrix } from '../lib/math';

type BoardProviderProps = {
  children: React.ReactNode;
};

export type BoardContextType = {
  boardState: BoardState;
  setBoardState: (boardState: BoardState) => void;
  toggleCellState: (x: number, y: number) => void;
  setCellState: (x: number, y: number, state: number) => void;
  resetCellState: () => void;
  advanceBoard: () => Promise<void>;
  randomizeBoard: () => void;
};

export const BoardContext = createContext<BoardContextType>({} as BoardContextType);

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [boardState, setBoardState] = useState<BoardState>({
    width: 50,
    height: 50,
    board: createNumMatrix(50, 50, 0),
  });

  const toggleCellState = (x: number, y: number) => {
    const newState = { ...boardState };
    newState.board[y][x] = newState.board[y][x] === 0 ? 1 : 0;
    setBoardState(newState);
  };

  const setCellState = (x: number, y: number, state: number) => {
    if (boardState.board[y][x] === state) return;
    const newState = { ...boardState };
    newState.board[y][x] = state;
    setBoardState(newState);
  };

  const resetCellState = () => {
    const newState = { ...boardState };
    newState.board = newState.board.map((row) => row.map(() => 0));
    setBoardState(newState);
  };

  const advanceBoard = async () => {
    setBoardState(await getAdvancedBoard(boardState));
  };

  const randomizeBoard = () => {
    const newState = { ...boardState };
    newState.board = newState.board.map((row) => row.map(() => (Math.random() > 0.5 ? 1 : 0)));
    setBoardState(newState);
  };

  return (
    <BoardContext.Provider
      value={{
        boardState,
        setBoardState,
        toggleCellState,
        setCellState,
        resetCellState,
        advanceBoard,
        randomizeBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
