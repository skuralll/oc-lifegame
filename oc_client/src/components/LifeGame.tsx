import { Board } from './Board';
import { BoardProvider } from '../contexts/BoardProvider';
import { MouseStateProvider } from '../contexts/MouseStateProvider';

export const LifeGame = () => {
  return (
    <BoardProvider>
      <MouseStateProvider>
        <Board cellSize={50} />
      </MouseStateProvider>
    </BoardProvider>
  );
};
