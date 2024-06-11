import { createContext, useState } from 'react';
import { MouseState } from '../types/MouseState';

type MouseStateProviderProps = {
  children: React.ReactNode;
};

export type MouseContextType = {
  mouseState: MouseState;
  setMouseState: (mouseState: MouseState) => void;
  setMouseDown: (isMouseDown: boolean) => void;
};

export const MouseContext = createContext<MouseContextType>({} as MouseContextType);

export const MouseStateProvider = ({ children }: MouseStateProviderProps) => {
  const [mouseState, setMouseState] = useState<MouseState>({
    isMouseDown: false,
  });

  const setMouseDown = (isMouseDown: boolean) => {
    setMouseState({ ...mouseState, isMouseDown });
  };

  return (
    <MouseContext.Provider value={{ mouseState, setMouseState, setMouseDown: setMouseDown }}>
      {children}
    </MouseContext.Provider>
  );
};
