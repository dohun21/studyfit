'use client';

import { useEffect, useState } from 'react';

export default function FlowTimerPage() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const format = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-white p-6 max-w-[390px] mx-auto">
      <h2 className="text-lg font-bold mb-2">자유 모드</h2>
      <p className="text-sm text-gray-500 mb-4">과목: 영어</p>

      <div className="bg-[#F3F4F6] p-4 rounded-xl mb-4 text-center">
        <h3 className="text-md font-semibold mb-2">영어 단어 외우기</h3>
        <div className="text-[36px] font-bold text-blue-600">{format(seconds)}</div>
      </div>

      <div className="flex justify-around mb-4">
        <button onClick={() => setRunning((prev) => !prev)} className="text-sm px-4 py-1 border rounded-md">
          {running ? '일시정지' : '재시작'}
        </button>
        <button onClick={() => setSeconds(0)} className="text-sm px-4 py-1 border rounded-md">
          리셋
        </button>
        <button onClick={() => alert("기록 저장됨")} className="text-sm px-4 py-1 bg-[#3B82F6] text-white rounded-md">
          종료
        </button>
      </div>

      <textarea
        className="w-full h-[100px] border rounded-md p-2 text-sm"
        placeholder="오늘 공부하면서 느낀 점을 남겨보세요..."
      />
    </div>
  );
}