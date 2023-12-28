"use client";
import { useGoTo } from "@/hooks";
import navigationIcon from "../../../public/navigation.svg";
import Image from "next/image";
export default function NavigateCard() {
  const goto = useGoTo();
  return (
    <div
      className="w-1/2 h-32 border-2 border-orange-500 rounded-xl flex justify-center items-center text-orange-500 text-xl cursor-pointer"
      onClick={() => {
        goto("/navigation");
      }}
    >
      Navegar
      <Image
        src={navigationIcon}
        alt="navigation icon"
        width={25}
        height={25}
        className="m-2"
      ></Image>
    </div>
  );
}
