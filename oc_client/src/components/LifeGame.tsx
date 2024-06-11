import { Button } from '@chakra-ui/react';
import { Board } from './Board';
import { useContext, useState } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { useAnimationFrame } from '../hooks/AnimationFrame';

export const LifeGame = () => {
  const { resetCellState, advanceBoard } = useContext(BoardContext) as BoardContextType;
  const [isAuto, setIsAuto] = useState(false);

  const handleReset = () => {
    resetCellState();
    isAuto && toggleAutoAdvance();
  };

  const handleAdvance = async () => {
    await advanceBoard();
  };

  // ゲームループ
  const gameLoop = (elapsed: number) => {
    advanceBoard();
  };
  const { start: startAuto, stop: endAuto } = useAnimationFrame(gameLoop, 250);

  // 自動進行切り替え
  const toggleAutoAdvance = () => {
    isAuto ? endAuto() : startAuto();
    setIsAuto(!isAuto);
  };

  return (
    <>
      <Board cellSize={50} />
      <Button onClick={handleReset}>リセット</Button>
      <Button onClick={handleAdvance}>進める</Button>
      <Button onClick={toggleAutoAdvance}>自動で進める</Button>
    </>
  );
};
