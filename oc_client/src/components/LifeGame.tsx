import { Board } from './Board';
import { useContext, useState } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { useAnimationFrame } from '../hooks/AnimationFrame';
import { Box, Center, Flex, HStack, Spacer, VStack } from '@chakra-ui/react';
import { BaseController } from './BaseController';
import { AutoButton } from './AutoButton';
import { DrawModeController } from './DrawModeController';

export const LifeGame = () => {
  const { boardState, advanceBoard } = useContext(BoardContext) as BoardContextType;
  const [_isAuto, _setIsAuto] = useState(false);
  const [cellSize, setCellSize] = useState(20);

  // ゲームループ
  const gameLoop = (elapsed: number) => {
    advanceBoard();
  };
  const { start: startAuto, stop: endAuto } = useAnimationFrame(gameLoop, 250);

  // 自動進行切り替え
  const setIsAuto = (auto: boolean) => {
    if (auto) {
      // 自動進行ON
      if (_isAuto) return;
      startAuto();
      _setIsAuto(true);
    } else {
      // 自動進行OFF
      if (!_isAuto) return;
      endAuto();
      _setIsAuto(false);
    }
  };

  return (
    <Center>
      <VStack>
        <Flex w="100%">
          <AutoButton isAuto={_isAuto} setIsAuto={setIsAuto} />
          <Spacer />
          <BaseController isAuto={_isAuto} setIsAuto={setIsAuto} />
          <Spacer />
          <DrawModeController />
        </Flex>
        <Board cellSize={cellSize} />
      </VStack>
    </Center>
  );
};
