import { BoardProvider } from '../contexts/BoardProvider';
import { LifeGame } from './LifeGame';

export const LifeGameWrapper = () => {
  return (
    <BoardProvider>
      <LifeGame />
    </BoardProvider>
  );
};
