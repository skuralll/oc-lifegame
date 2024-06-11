import { Button } from '@chakra-ui/react';
import { Board } from './Board';
import { useContext } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';

export const LifeGame = () => {
  const { resetCellState, advanceBoard } = useContext(BoardContext) as BoardContextType;

  const handleReset = () => {
    resetCellState();
  };

  const handleAdvance = async () => {
    await advanceBoard();
  };

  return (
    <>
      <Board cellSize={50} />
      <Button onClick={handleReset}>リセット</Button>
      <Button onClick={handleAdvance}>進める</Button>
    </>
  );
};
