import { Layer, Rect, Stage } from 'react-konva';
import { Cell } from './Cell';
import { useContext } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';

type BoardProps = {
  cellSize: number;
};

export const Board = ({ cellSize }: BoardProps) => {
  const { boardState } = useContext(BoardContext) as BoardContextType;
  return (
    <Stage width={boardState.width * cellSize} height={boardState.height * cellSize}>
      <Layer>
        {boardState.board.map((row, y) =>
          row.map((alive, x) => (
            <Cell
              key={`${x}-${y}`}
              x={x * cellSize}
              y={y * cellSize}
              cellSize={cellSize}
              alive={alive == 1}
            />
          ))
        )}
      </Layer>
    </Stage>
  );
};
