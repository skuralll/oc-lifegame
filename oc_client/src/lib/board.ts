type BoardSize = {
  width: number;
  height: number;
};

// 盤面の大きさを返す関数
export const getBoardSize = (width: number, height: number, cellSize: number): BoardSize => {
  return {
    width: width * cellSize,
    height: height * cellSize,
  };
};
