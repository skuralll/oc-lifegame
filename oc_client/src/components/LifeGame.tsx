import { Button } from '@chakra-ui/react';
import { Board } from './Board';
import { useContext } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';

export const LifeGame = () => {
  const { resetCellState } = useContext(BoardContext) as BoardContextType;

  const handleReset = () => {
    resetCellState();
  };

  return (
    <>
      <Board cellSize={50} />
      <Button onClick={handleReset}>リセット</Button>
    </>
  );
};
