'use client';

import { useRouter } from 'next/navigation';

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white border-t border-gray-200 flex justify-around py-2 z-50">
      <button onClick={() => router.push("/home")} className="text-sm text-gray-700">홈</button>
      <button onClick={() => router.push("/routine")} className="text-sm text-gray-700">루틴</button>
      <button onClick={() => router.push("/studyrecord")} className="text-sm text-gray-700">기록</button>
      <button onClick={() => router.push("/settings")} className="text-sm text-gray-700">설정</button>
    </nav>
  );
}