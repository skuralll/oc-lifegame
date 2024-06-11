import { createContext, useState } from 'react';
import { MouseState } from '../types/MouseState';

type MouseStateProviderProps = {
  children: React.ReactNode;
};

export type MouseContextType = {
  mouseState: MouseState;
  setMouseState: (mouseState: MouseState) => void;
};

export const MouseContext = createContext<MouseContextType | null>(null);

export const MouseStateProvider = ({ children }: MouseStateProviderProps) => {
  const [mouseState, setMouseState] = useState<MouseState>({
    isMouseDown: false,
  });

  return (
    <MouseContext.Provider value={{ mouseState, setMouseState }}>{children}</MouseContext.Provider>
  );
};
