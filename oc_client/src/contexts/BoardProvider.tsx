import { createContext, useState } from 'react';
import { BoardState } from '../types/BoardState';

type BoardProviderProps = {
  children: React.ReactNode;
};

type BoardContextType = {
  boardState: BoardState;
  setBoardState: (boardState: BoardState) => void;
};

export const BoardContext = createContext<BoardContextType | null>(null);

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [boardState, setBoardState] = useState<BoardState>({
    width: 5,
    height: 5,
    board: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  });
  return (
    <BoardContext.Provider value={{ boardState, setBoardState }}>{children}</BoardContext.Provider>
  );
};
