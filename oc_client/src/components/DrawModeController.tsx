import { HStack, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaEraser } from 'react-icons/fa';
import { GameContext, GameContextType } from '../contexts/GameProvider';

type DrawModeControllerProps = {};

export const DrawModeController = ({}: DrawModeControllerProps) => {
  const { setIsDrawMode, isDrawMode } = useContext(GameContext) as GameContextType;
  return (
    <HStack spacing={3}>
      <IconButton
        icon={<FaPen />}
        aria-label={'draw'}
        isRound={true}
        onClick={() => setIsDrawMode(true)}
        colorScheme={isDrawMode ? 'pink' : undefined}
      ></IconButton>
      <IconButton
        icon={<FaEraser />}
        aria-label={'erase'}
        isRound={true}
        onClick={() => setIsDrawMode(false)}
        colorScheme={!isDrawMode ? 'pink' : undefined}
      ></IconButton>
    </HStack>
  );
};
