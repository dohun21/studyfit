"use client";

import { useEffect, useRef, useState } from "react";

export default function FreeFlowTimerPage() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 시작
  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  // 일시정지
  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  // 리셋
  const resetTimer = () => {
    pauseTimer();
    setSeconds(0);
  };

  // 종료 (일시정지만 시킴)
  const endTimer = () => {
    pauseTimer();
    alert("공부가 종료되었습니다.");
  };

  // 시간 포맷
  const formatTime = (sec: number) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-lg font-bold mb-2">자유 모드</h1>

      <div className="bg-[#F2F2F2] rounded-[12px] px-6 py-4 text-center text-4xl font-bold text-blue-500 mb-4">
        {formatTime(seconds)}
      </div>

      <div className="flex gap-3 mb-6">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            시작
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            일시정지
          </button>
        )}
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-200 text-black rounded-lg"
        >
          리셋
        </button>
        <button
          onClick={endTimer}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          종료
        </button>
      </div>

      <textarea
        placeholder="오늘 공부하면서 느낀 점을 남겨보세요..."
        className="w-full max-w-[360px] min-h-[100px] px-4 py-3 border rounded-md bg-[#F2F2F2] text-sm"
      />
    </div>
  );
}
