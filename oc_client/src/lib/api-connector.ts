import { BoardState } from '../types/BoardState';

export const getAdvancedBoard = (boad: BoardState): Promise<BoardState> =>
  fetch(import.meta.env.VITE_API_STEP, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(boad),
  }).then((response) => response.json());
