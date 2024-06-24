import { Button, Flex, HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';

type BaseControllerProps = {
  isAuto: boolean;
  setIsAuto: (auto: boolean) => void;
};

export const BaseController = ({ isAuto, setIsAuto }: BaseControllerProps) => {
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
    <HStack spacing={12}>
      <Button onClick={handleAdvance} isDisabled={isAuto} flexGrow={1} colorScheme="teal">
        進める
      </Button>
      <Button onClick={handleReset} isDisabled={isAuto} flexGrow={1} colorScheme="teal">
        リセット
      </Button>
      <Button onClick={handleRandomize} isDisabled={isAuto} flexGrow={1} colorScheme="teal">
        ランダム
      </Button>
    </HStack>
  );
};
