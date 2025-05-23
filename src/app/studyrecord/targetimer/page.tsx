"use client";

import { useState, useEffect } from "react";

export default function TargetModePage() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 기본값: 25분
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60); // 다시 25분으로 초기화
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-8 pb-12 w-full max-w-[360px] mx-auto">
      <h1 className="text-[20px] font-bold mb-4">목표 시간 타이머</h1>

      <div className="w-full bg-[#F2F2F2] rounded-[8px] p-4 mb-6">
        <p className="text-sm">과목: 수학</p>
        <p className="text-sm">설정 시간: 25분</p>
      </div>

      <div className="text-[48px] font-bold text-[#3B82F6] mb-6">
        {formatTime(timeLeft)}
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 rounded bg-gray-200 text-sm"
        >
          {isRunning ? "일시정지" : "시작"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded bg-gray-200 text-sm"
        >
          리셋
        </button>
        <button
          onClick={() => alert("공부를 종료합니다.")}
          className="px-4 py-2 rounded bg-[#3B82F6] text-white text-sm"
        >
          종료
        </button>
      </div>

      <textarea
        placeholder="공부하면서 느낀 점이나 메모를 적어보세요..."
        className="w-full bg-[#F2F2F2] rounded-[8px] p-3 text-sm h-[100px]"
      />
    </div>
  );
}