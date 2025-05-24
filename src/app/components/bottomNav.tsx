"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);
  const linkStyle = (active: boolean) =>
    `text-sm ${active ? "text-blue-600 font-bold" : "text-gray-700"}`;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] bg-white border-t border-gray-200 flex justify-around py-2 z-50">
      <button
        onClick={() => router.push("/home")}
        className={linkStyle(isActive("/home"))}
      >
        홈
      </button>
      <button
        onClick={() => router.push("/routine")}
        className={linkStyle(isActive("/routine"))}
      >
        루틴
      </button>
      <button
        onClick={() => router.push("/record")}
        className={linkStyle(isActive("/record"))}
      >
        기록
      </button>
      <button
        onClick={() => router.push("/settings")}
        className={linkStyle(isActive("/settings"))}
      >
        설정
      </button>
    </nav>
  );
}
