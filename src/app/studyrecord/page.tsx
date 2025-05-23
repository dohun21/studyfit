"use client";

import { useState } from "react";
import BottomNav from "../components/bottomNav";

export default function StudyRecordPage() {
  const [mode, setMode] = useState("goal");
  const [selectedTime, setSelectedTime] = useState(25);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center w-full px-4">
      <div className="w-full max-w-[393px] py-6">
        <h1 className="text-[20px] font-bold mb-6">공부 기록하기 <span className="ml-1">📚</span></h1>

        {/* 과목, 내용, 방식 박스 */}
        <div className="bg-white rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] px-4 py-5 mb-6">
          <label className="text-[14px] font-bold mb-1 block">공부 과목</label>
          <select className="w-full bg-[#FCFCFC] border border-[#E5E7EB] rounded-[8px] h-[40px] text-[14px] px-3 mb-5">
            <option>과목을 선택하세요</option>
            <option>수학</option>
            <option>영어</option>
            <option>국어</option>
            <option>과학</option>
            <option>사회</option>
            <option>역사</option>
            <option>기타</option>
          </select>

          <label className="text-[14px] font-bold mb-1 block">공부할 내용</label>
          <input
            type="text"
            placeholder="예: 수학 문제집 3p 풀기"
            className="w-full bg-[#FCFCFC] border border-[#E5E7EB] rounded-[8px] h-[40px] text-[14px] px-3 placeholder:text-[#7A7A7A] mb-5"
          />

          <label className="text-[14px] font-bold mb-1 block">공부 방식 (선택)</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {["자습", "인강", "문제 풀이", "암기"].map((method) => (
              <span
                key={method}
                className="bg-[#10B981] text-white text-[13px] px-[14px] py-[6px] rounded-[16px]"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* 타이머 모드 박스 */}
        <div className="bg-white rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] px-4 py-5 mb-6">
          <label className="text-[14px] font-bold mb-2 block">타이머 모드 선택</label>

          <div className="mb-4">
            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="mode"
                checked={mode === "goal"}
                onChange={() => setMode("goal")}
              />
              <span className="text-[14px] font-normal">목표 시간 모드</span>
            </label>

            {mode === "goal" && (
              <>
                <div className="flex gap-2 mb-2">
                  {[25, 50].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-1 rounded-full border text-sm ${
                        selectedTime === time
                          ? "bg-[#3B82F6] text-white"
                          : "bg-white text-black border-[#E5E7EB]"
                      }`}
                    >
                      {time}분
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="직접 입력 (분)"
                  className="w-full h-[40px] bg-[#FCFCFC] border border-[#E5E7EB] rounded-[8px] text-[14px] px-3"
                />
              </>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="mode"
                checked={mode === "flow"}
                onChange={() => setMode("flow")}
              />
              <span className="text-[14px] font-normal">자유 흐름 모드</span>
            </label>
            <p className="text-xs text-gray-500 mt-2">
              타이머는 0부터 시작하며, 사용자가 수동으로 종료합니다.
            </p>
          </div>
        </div>

        <button className="w-full h-[48px] bg-[#3B82F6] text-white text-[16px] font-medium rounded-[12px]">
          공부 시작하기 ➜
        </button>
      </div>

      <BottomNav />
    </div>
  );
}