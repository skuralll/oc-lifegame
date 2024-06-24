import { createContext, useState } from 'react';

type GameProviderProps = {
  children: React.ReactNode;
};

export type GameContextType = {
  isDrawMode: boolean;
  setIsDrawMode: (isDrawMode: boolean) => void;
};

export const GameContext = createContext<GameContextType>({} as GameContextType);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [isDrawMode, setIsDrawMode] = useState(true);

  return (
    <GameContext.Provider
      value={{
        isDrawMode,
        setIsDrawMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
