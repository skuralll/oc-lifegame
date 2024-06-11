/*
引用元:
ReactでrequestAnimationFrameを使ってゲームループを実装してみた
https://zenn.dev/glassonion1/articles/3650a6d194986a
*/

import { useState, useRef, useEffect, useCallback } from 'react';

export const useAnimationFrame = (callback: (ts: number) => void, delay: number = 0) => {
  const [isRunning, setIsRunning] = useState(false);
  const reqIdRef = useRef<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [prevTime, setPrevTime] = useState<number>(Date.now());

  const loop = useCallback(
    (ts: number) => {
      let st = startTime;
      if (isRunning) {
        reqIdRef.current = requestAnimationFrame(loop);
        if (st === 0) {
          st = ts;
          setStartTime(st);
        }
        // ループタイミングの計算
        const delta = Date.now() - prevTime;
        if (delta >= delay) {
          // 経過時間の計算
          const elapsed = ts - st;
          // コールバック関数の呼び出し
          callback(elapsed);
          setPrevTime(Date.now());
        }
      } else {
        setStartTime(0);
      }
    },
    [isRunning, callback, startTime]
  );

  // ゲームループの初期化
  useEffect(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [loop]);

  // ゲームループをスタートさせる
  const start = () => {
    setIsRunning(true);
  };

  // ゲームループをストップする
  const stop = () => {
    setIsRunning(false);
  };

  return { start, stop };
};
