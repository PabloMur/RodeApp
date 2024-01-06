"use client";

import { useGoTo } from "@/hooks";

export default function MiniList({ title, id }: any) {
  const goto = useGoTo();
  const handleClick = () => {
    goto(`/lists/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="text-black bg-orange-500 p-4 w-full rounded-xl font-bold text-xl flex justify-center items-center"
    >
      <p>{title}</p>
    </div>
  );
}
