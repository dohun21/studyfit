"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[360px] p-6 flex flex-col items-center">
        <h1 className="text-[24px] font-bold text-black mb-10">로그인</h1>

        <div className="flex flex-col w-full gap-4">
          <input
            type="email"
            placeholder="이메일 입력"
            className="h-[48px] w-full px-4 bg-[#F2F2F2] rounded-[8px] text-sm placeholder-gray-500 border border-[#00000066]"
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            className="h-[48px] w-full px-4 bg-[#F2F2F2] rounded-[8px] text-sm placeholder-gray-500 border border-[#00000066]"
          />
        </div>

        <button
          onClick={() => router.push("/home")} // ✅ 여기가 핵심
          className="w-full h-[48px] bg-[#3B82F6] text-white rounded-[20px] mt-6 text-base font-medium"
        >
          로그인
        </button>

        <div className="flex items-center my-8 w-full">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-4 text-gray-500 text-sm">간편 로그인</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <p
          className="text-sm text-gray-500 mt-8 cursor-pointer underline"
          onClick={() => router.push("/signup")}
        >
          회원가입
        </p>
      </div>
    </div>
  );
}