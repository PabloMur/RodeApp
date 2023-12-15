"use client";
import { menuAtom } from "@/atoms";
import { useRecoilValue } from "recoil";
export default function ManuDesplegable({ children }: any) {
  return (
    useRecoilValue(menuAtom) && (
      <menu className="absolute top-[12vh] h-[88vh] bg-orange-500 w-[100%] left-0 z-30">
        <ul>{children}</ul>
      </menu>
    )
  );
}
