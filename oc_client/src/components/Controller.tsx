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
      <Button onClick={handleReset} isDisabled={isAuto}>
        リセット
      </Button>
      <Button onClick={handleAdvance} isDisabled={isAuto}>
        進める
      </Button>
      <Button onClick={() => setIsAuto(!isAuto)}>{isAuto ? '止める' : '自動で進める'}</Button>
      <Button onClick={handleRandomize} isDisabled={isAuto}>
        ランダム
      </Button>
    </Box>
  );
};
