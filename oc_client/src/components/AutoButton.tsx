import { Button } from '@chakra-ui/react';
import React from 'react';

type AutoButtonProps = {
  isAuto: boolean;
  setIsAuto: (auto: boolean) => void;
};

export const AutoButton = ({ isAuto, setIsAuto }: AutoButtonProps) => {
  return (
    <Button onClick={() => setIsAuto(!isAuto)} colorScheme={isAuto ? 'orange' : 'green'} w={24}>
      {isAuto ? '停止' : 'プレイ'}
    </Button>
  );
};
