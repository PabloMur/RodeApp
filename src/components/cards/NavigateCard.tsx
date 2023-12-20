"use client";
import { useGoTo } from "@/hooks";
export default function NavigateCard() {
  const goto = useGoTo();
  return (
    <div
      className="w-1/2 h-32 border-2 border-orange-500 rounded-xl flex justify-center items-center text-orange-500 text-xl"
      onClick={() => {
        goto("/navigation");
      }}
    >
      Navegar
    </div>
  );
}
