"use client";
import { useCTA } from "@/hooks/index";
export default function CtaBtn() {
  const callToAction = useCTA();
  return (
    <button
      className="z-20 text-xl text-black bg-orange-500 p-3 m-2 rounded w-[90%] sm:w-[300px]"
      onClick={() => {
        callToAction();
      }}
    >
      Comenzar!
    </button>
  );
}
