"use client";
import { useGoTo } from "@/hooks";
import Image from "next/image";
import plus from "../../../public/plus.svg";
export default function CreateListCard() {
  const goto = useGoTo();
  return (
    <div
      className=" rounded-xl bg-orange-500 w-1/2 p-4 flex justify-center items-center h-32 text-black text-xl box-border cursor-pointer"
      onClick={() => {
        goto("/lists");
      }}
    >
      <p className="text-xl mr-2">Crear lista</p>
      <Image src={plus} alt={"icono de plus"} width={25} height={25}></Image>
    </div>
  );
}
