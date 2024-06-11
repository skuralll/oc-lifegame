import { BoardProvider } from '../contexts/BoardProvider';
import { MouseStateProvider } from '../contexts/MouseStateProvider';
import { LifeGame } from './LifeGame';

export const LifeGameWrapper = () => {
  return (
    <BoardProvider>
      <MouseStateProvider>
        <LifeGame />
      </MouseStateProvider>
    </BoardProvider>
  );
};
