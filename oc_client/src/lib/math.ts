// 全ての要素がvalueのx * yの二次元配列を作成する関数
export const createNumMatrix = (x: number, y: number, value: number): number[][] => {
  const matrix: number[][] = [];
  for (let i = 0; i < x; i++) {
    const row: number[] = new Array(y).fill(value);
    matrix.push(row);
  }
  return matrix;
};
