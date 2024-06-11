import { useContext } from 'react';
import { Rect } from 'react-konva';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { MouseContext, MouseContextType } from '../contexts/MouseStateProvider';

type CellProps = {
  col: number;
  row: number;
  x: number;
  y: number;
  cellSize: number;
  alive: boolean;
};

export const Cell = ({ col, row, x, y, cellSize, alive }: CellProps) => {
  const { toggleCellState } = useContext(BoardContext) as BoardContextType;
  const { mouseState } = useContext(MouseContext) as MouseContextType;

  const handleClick = () => {
    toggleCellState(col, row);
  };

  const handleMouseEnter = () => {
    if (!mouseState.isMouseDown) return;
    toggleCellState(col, row);
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
