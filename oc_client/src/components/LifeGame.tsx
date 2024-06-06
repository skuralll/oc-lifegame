import { Board } from './Board';
import { BoardProvider } from '../contexts/BoardProvider';

export const LifeGame = () => {
  return (
    <BoardProvider>
      <Board cellSize={50} />
    </BoardProvider>
  );
};
