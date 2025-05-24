'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GoalTimerPage() {
  const searchParams = useSearchParams();
  const minutes = Number(searchParams.get('minutes')) || 25;
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const format = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-white p-6 max-w-[390px] mx-auto">
      <h2 className="text-lg font-bold mb-2">목표 모드</h2>
      <p className="text-sm text-gray-500 mb-4">과목: 수학 ⏰ {minutes}분</p>

      <div className="bg-[#F3F4F6] p-4 rounded-xl mb-4 text-center">
        <h3 className="text-md font-semibold mb-2">수학 문제집 3장 풀기</h3>
        <div className="text-[36px] font-bold">{format(secondsLeft)}</div>
      </div>

      <div className="flex justify-around mb-4">
        <button onClick={() => setRunning((prev) => !prev)} className="text-sm px-4 py-1 border rounded-md">
          {running ? '일시정지' : '재시작'}
        </button>
        <button onClick={() => setSecondsLeft(minutes * 60)} className="text-sm px-4 py-1 border rounded-md">
          리셋
        </button>
        <button onClick={() => alert("기록 저장됨")} className="text-sm px-4 py-1 bg-[#3B82F6] text-white rounded-md">
          종료
        </button>
      </div>

      <textarea
        className="w-full h-[100px] border rounded-md p-2 text-sm"
        placeholder="메모를 입력해주세요..."
      />
    </div>
  );
}