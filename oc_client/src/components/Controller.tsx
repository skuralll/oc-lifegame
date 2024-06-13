import { useContext } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { Box, Button } from '@chakra-ui/react';

type ControllerProps = {
  isAuto: boolean;
  setIsAuto: (auto: boolean) => void;
};

export const Controller = ({ isAuto, setIsAuto }: ControllerProps) => {
  const { resetCellState, advanceBoard, randomizeBoard } = useContext(
    BoardContext
  ) as BoardContextType;

  const handleReset = () => {
    setIsAuto(false);
    resetCellState();
  };

  const handleAdvance = async () => {
    await advanceBoard();
  };

  const handleRandomize = () => {
    if (isAuto) return;
    setIsAuto(false);
    randomizeBoard();
  };

  return (
    <Box>
      <Button onClick={handleReset}>リセット</Button>
      <Button onClick={handleAdvance}>進める</Button>
      <Button onClick={() => setIsAuto(!isAuto)}>自動で進める</Button>
      <Button onClick={handleRandomize}>ランダム</Button>
    </Box>
  );
};
