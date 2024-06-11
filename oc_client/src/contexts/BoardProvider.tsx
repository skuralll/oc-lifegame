import { createContext, useState } from 'react';
import { BoardState } from '../types/BoardState';
import { getAdvancedBoard } from '../lib/api-connector';

type BoardProviderProps = {
  children: React.ReactNode;
};

export type BoardContextType = {
  boardState: BoardState;
  setBoardState: (boardState: BoardState) => void;
  toggleCellState: (x: number, y: number) => void;
  resetCellState: () => void;
  advanceBoard: () => Promise<void>;
};

export const BoardContext = createContext<BoardContextType>({} as BoardContextType);

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [boardState, setBoardState] = useState<BoardState>({
    width: 9,
    height: 9,
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  });

  const toggleCellState = (x: number, y: number) => {
    const newState = { ...boardState };
    newState.board[y][x] = newState.board[y][x] === 0 ? 1 : 0;
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

  return (
    <BoardContext.Provider
      value={{ boardState, setBoardState, toggleCellState, resetCellState, advanceBoard }}
    >
      {children}
    </BoardContext.Provider>
  );
};
