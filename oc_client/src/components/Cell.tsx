import { useContext } from 'react';
import { Rect } from 'react-konva';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { KonvaEventObject } from 'konva/lib/Node';
import { GameContext, GameContextType } from '../contexts/GameProvider';

type CellProps = {
  col: number;
  row: number;
  x: number;
  y: number;
  cellSize: number;
  alive: boolean;
};

export const Cell = ({ col, row, x, y, cellSize, alive }: CellProps) => {
  const { setCellState } = useContext(BoardContext) as BoardContextType;
  const { isDrawMode } = useContext(GameContext) as GameContextType;

  console.log('this is a test');

  const handleClick = () => {
    setCellState(col, row, isDrawMode ? 1 : 0);
  };

  const handleMouseEnter = (event: KonvaEventObject<MouseEvent>) => {
    if ((event.evt.buttons & 1) == 0) return;
    setCellState(col, row, isDrawMode ? 1 : 0);
  };

  return (
    <Rect
      fill={alive ? '#EB984E' : '#ECF0F1'}
      stroke="#B2BABB"
      strokeWidth={0.5}
      x={x}
      y={y}
      width={cellSize}
      height={cellSize}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    />
  );
};
