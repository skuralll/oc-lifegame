import { Board } from './Board';
import { useContext, useState } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { useAnimationFrame } from '../hooks/AnimationFrame';
import { Center, Flex } from '@chakra-ui/react';
import { Controller } from './Controller';

export const LifeGame = () => {
  const { advanceBoard } = useContext(BoardContext) as BoardContextType;

  const [_isAuto, _setIsAuto] = useState(false);

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
    <>
      <Center>
        <Board cellSize={15} />
        {/* <Controller isAuto={_isAuto} setIsAuto={setIsAuto} /> */}
      </Center>
    </>
  );
};
