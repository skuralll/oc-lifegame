import { BoardProvider } from '../contexts/BoardProvider';
import { LifeGame } from './LifeGame';
import { GameProvider } from '../contexts/GameProvider';

export const LifeGameWrapper = () => {
  return (
    <GameProvider>
      <BoardProvider>
        <LifeGame />
      </BoardProvider>
    </GameProvider>
  );
};
