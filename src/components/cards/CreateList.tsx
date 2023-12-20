"use client";
import { useGoTo } from "@/hooks";
export default function CreateListCard() {
  const goto = useGoTo();
  return (
    <div
      className=" rounded-xl bg-orange-500 w-1/2 p-4 flex justify-center items-center h-32 text-black text-xl box-border cursor-pointer"
      onClick={() => {
        goto("/lists");
      }}
    >
      Crear Lista
    </div>
  );
}
