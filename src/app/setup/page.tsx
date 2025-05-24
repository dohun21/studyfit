'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GoalSetupPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'daily' | 'weekly'>('daily');
  const [goalMinutes, setGoalMinutes] = useState(90);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const lastSet = localStorage.getItem('lastGoalDate');
    const lastMode = localStorage.getItem('goalMode');

    // 일단 'daily'만 체크
    if (lastSet && lastMode === 'daily' && lastSet === today) {
      router.push('/home'); // 오늘 이미 설정했으면 홈으로 이동
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('goalMinutes', String(goalMinutes));
    localStorage.setItem('goalMode', mode);
    localStorage.setItem('lastGoalDate', new Date().toISOString().slice(0, 10));
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-white w-full max-w-[390px] mx-auto p-4">
      <h1 className="text-[20px] font-bold mb-6">📌 목표 설정</h1>

      {/* 주기 선택 */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">목표 주기를 선택하세요</p>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('daily')}
            className={`px-4 py-1 rounded-full border ${
              mode === 'daily' ? 'bg-[#3B82F6] text-white' : 'border-gray-300'
            }`}
          >
            매일 설정
          </button>
          <button
            onClick={() => setMode('weekly')}
            className={`px-4 py-1 rounded-full border ${
              mode === 'weekly' ? 'bg-[#3B82F6] text-white' : 'border-gray-300'
            }`}
          >
            주간 설정
          </button>
        </div>
      </div>

      {/* 시간 설정 */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">목표 공부 시간</p>
        <div className="flex gap-2 mb-2">
          {[60, 90, 120].map((t) => (
            <button
              key={t}
              onClick={() => setGoalMinutes(t)}
              className={`px-4 py-1 rounded-full border ${
                goalMinutes === t ? 'bg-[#10B981] text-white' : 'border-gray-300'
              }`}
            >
              {t}분
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="직접 입력 (분)"
          className="w-full h-[40px] border px-3 rounded-md text-sm"
          onChange={(e) => setGoalMinutes(Number(e.target.value))}
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full h-[44px] bg-[#059669] text-white rounded-[12px] text-sm font-medium"
      >
        목표 저장하고 시작하기
      </button>
    </div>
  );
}
