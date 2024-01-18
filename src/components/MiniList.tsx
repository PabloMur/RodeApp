"use client";

import { useGoTo, useMiniList } from "@/hooks";

export default function MiniList({ title, id }: any) {
  const miniListHook = useMiniList();
  const handleClick = () => {
    miniListHook(id, `/lists/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="text-black bg-orange-500 p-4 w-full rounded-xl font-bold text-xl flex justify-center items-center mb-2 cursor-pointer"
    >
      <p>{title}</p>
    </div>
  );
}
