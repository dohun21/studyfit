'use client'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-[24px] font-bold text-black mb-8">회원가입</h1>

      <input
        type="email"
        placeholder="이메일 입력"
        className="w-[320px] h-[48px] px-4 bg-[#F2F2F2] rounded-lg mb-3 text-sm placeholder-gray-500"
      />
      <input
        type="password"
        placeholder="비밀번호 입력"
        className="w-[320px] h-[48px] px-4 bg-[#F2F2F2] rounded-lg mb-3 text-sm placeholder-gray-500"
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="w-[320px] h-[48px] px-4 bg-[#F2F2F2] rounded-lg mb-6 text-sm placeholder-gray-500"
      />

      <button
        className="w-[320px] h-[48px] bg-[#3B82F6] text-white rounded-[20px] text-base font-medium mb-6"
      >
        회원가입
      </button>

      <p className="text-sm text-gray-500">
        이미 계정이 있으신가요?{' '}
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={() => router.push('/login')}
        >
          로그인
        </span>
      </p>
    </div>
  )
}