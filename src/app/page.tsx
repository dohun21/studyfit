"use client";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[360px] p-6 flex flex-col items-center">
        <h1 className="text-[28px] font-bold text-[#059669] mb-10">StudyFit</h1>
        <button
          onClick={() => router.push("/login")}
          className="w-full h-[48px] bg-[#3B82F6] text-white rounded-[20px] text-base font-medium"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}