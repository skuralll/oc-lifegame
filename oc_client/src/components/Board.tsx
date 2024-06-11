import { Layer, Rect, Stage } from 'react-konva';
import { Cell } from './Cell';
import { useContext } from 'react';
import { BoardContext, BoardContextType } from '../contexts/BoardProvider';
import { MouseContext, MouseContextType } from '../contexts/MouseStateProvider';

type BoardProps = {
  cellSize: number;
};

export const Board = ({ cellSize }: BoardProps) => {
  const { boardState } = useContext(BoardContext) as BoardContextType;
  const { mouseState, setMouseDown } = useContext(MouseContext) as MouseContextType;

  const handleMouseEnter = () => {
    if (!mouseState.isMouseDown) return;
    setMouseDown(false);
  };

  const handleMouseLeave = () => {
    if (!mouseState.isMouseDown) return;
    setMouseDown(false);
  };

  return (
    <Stage
      width={boardState.width * cellSize}
      height={boardState.height * cellSize}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Layer>
        {boardState.board.map((row, y) =>
          row.map((alive, x) => (
            <Cell
              key={`${x}-${y}`}
              col={x}
              row={y}
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
