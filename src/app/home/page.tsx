'use client';

import { useRouter } from 'next/navigation';
import BottomNav from '../components/bottomNav';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-white w-full max-w-[390px] mx-auto pb-[60px]"> {/* ✅ 여유 공간 확보 */}
      <div className="px-4 pt-8 pb-4">
        <h1 className="text-[20px] font-bold text-[000000] mb-6">
          오늘도 StudyFit과 함께 해요! 💪
        </h1>

        <div className="w-full bg-[#EFF6FF] rounded-[8px] p-4 mb-4">
          <p className="text-sm text-black mb-2  ">📘 오늘의 추천 루틴</p>
          <p className="text-sm text-gray-600 mb-2">50분 공부 → 10분 스트레칭</p>
          <button className="w-full h-[40px] bg-[#3B82F6] text-white rounded-[20px] text-sm font-medium">
            지금 실행하기
          </button>
        </div>

        <div className="w-full mb-4">
          <p className="text-sm mb-1">📚 오늘 공부 시간: <b>2시간 40분</b></p>
          <p className="text-sm mb-1">🏃 운동 시간: <b>30분</b></p>
          <p className="text-sm mb-3">⏳ 남은 목표 시간: <b>1시간 20분</b></p>
          <button
            onClick={() => router.push('/studyrecord')}
            className="w-full h-[48px] bg-[#10B981] text-white rounded-[20px] text-base font-medium"
          >
            ✏️ 공부 시작하기
          </button>
        </div>

        <div className="w-full mb-6">
          <p className="text-sm text-black mb-1">오늘의 루틴 진행률</p>
          <div className="w-full h-[6px] bg-gray-200 rounded-full mb-1">
            <div className="w-[30%] h-full bg-[#3B82F6] rounded-full" />
          </div>
          <p className="text-xs text-gray-600">현재 진행률 30%</p>
        </div>

        <div className="w-full bg-[#F2F2F2] rounded-[8px] p-4">
          <p className="text-sm font-semibold mb-2">✅ 해야 할 일</p>
          <ul className="text-sm text-gray-700 list-disc ml-4">
            <li>영어 단어 30개 외우기</li>
            <li>수학 1단원 개념 정리</li>
            <li>과학 문제 20개 풀기</li>
          </ul>
        </div>
      </div>

      {/* ✅ 네비게이션 바는 항상 마지막에 */}
      <BottomNav />
    </div>
  );
}