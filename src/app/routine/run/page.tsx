'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RoutineRunPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get('title') || '루틴';
  const stepsRaw = searchParams.get('steps') || '';
  const stepList = stepsRaw.split('|').map((s) => {
    const [text, minutes] = s.split(',');
    return { step: text, minutes: Number(minutes) };
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(stepList[0].minutes * 60);
  const [isRunning, setIsRunning] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isRunning || isFinished) return;

    if (remainingTime <= 0) {
      if (stepIndex + 1 < stepList.length) {
        const nextStep = stepList[stepIndex + 1];
        setStepIndex(stepIndex + 1);
        setRemainingTime(nextStep.minutes * 60);
      } else {
        setIsFinished(true);
        setIsRunning(false);
      }
      return;
    }

    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime, isRunning, stepIndex]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-white w-full max-w-[390px] mx-auto px-4 py-6">
      {!isFinished ? (
        <>
          <h1 className="text-[20px] font-bold mb-4">루틴 실행 중</h1>

          <div className="bg-[#E0F2FE] p-4 rounded-[12px] mb-6 text-center">
            <p className="text-sm text-gray-600 mb-2">현재 단계</p>
            <h2 className="text-[18px] font-semibold mb-2">{stepList[stepIndex].step}</h2>
            <div className="text-[36px] font-bold text-[#1D4ED8]">{formatTime(remainingTime)}</div>
          </div>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="w-full h-[44px] bg-[#3B82F6] text-white rounded-[20px] text-sm font-medium"
          >
            {isRunning ? '⏸ 일시정지' : '▶ 다시시작'}
          </button>
        </>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-[20px] font-bold text-[#059669] mb-4">🎉 루틴이 완료되었습니다!</h2>
          <p className="text-sm text-gray-700 mb-6">오늘도 열심히 했어요!</p>
          <button className="w-full h-[44px] bg-[#10B981] text-white rounded-[20px] text-sm font-medium">
            기록 저장하기
          </button>
        </div>
      )}
    </div>
  );
}