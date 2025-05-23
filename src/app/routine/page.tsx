'use client';
import BottomNav from '../components/bottomNav';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RoutinePage() {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myTags, setMyTags] = useState('');
  const [mySteps, setMySteps] = useState('');
  const [routines, setRoutines] = useState([
    {
      title: '집중 루틴 A',
      steps: [
        { step: '공부 50분 집중', minutes: 50 },
        { step: '산책으로 머리 식히기', minutes: 15 },
        { step: '복습 정리', minutes: 15 },
      ],
      tags: ['#공부', '#집중'],
    },
    {
      title: '암기 루틴',
      steps: [
        { step: '영단어 암기 30분', minutes: 30 },
        { step: '쉬는 시간 5분', minutes: 5 },
        { step: '복습 정리 10분', minutes: 10 },
      ],
      tags: ['#암기', '#영어'],
    },
  ]);

  const filtered = routines.filter(
    (routine) =>
      routine.title.includes(search) ||
      routine.tags.some((tag) => tag.includes(search))
  );

  const handleAddRoutine = () => {
    if (!myTitle.trim() || !mySteps.trim()) return;

    const newSteps = mySteps
      .split('|')
      .map((s) => {
        const [text, minutes] = s.trim().split(',');
        return { step: text, minutes: Number(minutes) };
      });

    const newRoutine = {
      title: myTitle,
      steps: newSteps,
      tags: myTags.split(' ').filter((t) => t),
    };

    setRoutines([...routines, newRoutine]);
    setMyTitle('');
    setMyTags('');
    setMySteps('');
  };

  return (
    <div className="relative min-h-screen bg-white w-full max-w-[390px] mx-auto pb-[80px]">
      <div className="p-4">
        <h1 className="text-[20px] font-bold text-black mb-4">루틴 검색</h1>

        <input
          type="text"
          placeholder="예: 스트레칭, 공부, 암기..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[40px] px-3 mb-4 bg-[#F2F2F2] rounded-[8px] text-sm border border-[#00000066]"
        />

        {filtered.map((routine, i) => (
          <div key={i} className="bg-[#E0F7FA] px-4 py-3 rounded-[12px] mb-4 text-sm">
            <h3 className="font-semibold text-[15px] mb-1">{routine.title}</h3>
            <ul className="text-xs text-gray-800 leading-5 list-disc pl-4">
              {routine.steps.map((s, idx) => (
                <li key={idx}>
                  {s.step} ({s.minutes}분)
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-[#059669]">
              {routine.tags.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
            <button
              onClick={() =>
                router.push(
                  `/routine/run?title=${encodeURIComponent(routine.title)}&steps=${encodeURIComponent(
                    routine.steps.map((s) => `${s.step},${s.minutes}`).join('|')
                  )}`
                )
              }
              className="w-full mt-3 h-[36px] rounded-[20px] bg-[#3B82F6] text-white text-sm"
            >
              실행하기
            </button>
          </div>
        ))}

        <div className="mt-8">
          <h2 className="text-[16px] font-semibold mb-2">+ 나만의 루틴 만들기</h2>

          <input
            type="text"
            placeholder="루틴 제목 (예: 밤 집중 루틴)"
            value={myTitle}
            onChange={(e) => setMyTitle(e.target.value)}
            className="w-full h-[40px] px-3 mb-2 bg-[#F2F2F2] rounded-[8px] text-sm border border-[#00000066]"
          />

          <input
            type="text"
            placeholder="해시태그 (예: #공부 #운동)"
            value={myTags}
            onChange={(e) => setMyTags(e.target.value)}
            className="w-full h-[40px] px-3 mb-2 bg-[#F2F2F2] rounded-[8px] text-sm border border-[#00000066]"
          />

          <textarea
            placeholder="단계 입력 (예: 공부 30분,30|휴식 10분,10)"
            value={mySteps}
            onChange={(e) => setMySteps(e.target.value)}
            className="w-full h-[80px] px-3 py-2 bg-[#F2F2F2] rounded-[8px] text-sm border border-[#00000066] mb-2"
          />

          <button
            onClick={handleAddRoutine}
            className="w-full h-[40px] rounded-[20px] bg-[#3B82F6] text-white text-sm"
          >
            루틴 추가하기
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}