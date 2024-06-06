import { Rect } from 'react-konva';

type CellProps = {
  x: number;
  y: number;
  cellSize: number;
  alive: boolean;
};

export const Cell = ({ x, y, cellSize, alive }: CellProps) => {
  return (
    <Rect
      fill={alive ? '#EB984E' : '#ECF0F1'}
      stroke="#B2BABB"
      strokeWidth={0.5}
      x={x}
      y={y}
      width={cellSize}
      height={cellSize}
    />
  );
};
