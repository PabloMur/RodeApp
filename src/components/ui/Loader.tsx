"use client";
import { loaderAtom } from "@/atoms";
import { useRecoilValue } from "recoil";
import Spinner from "@/components/ui/Spinner";
const Loader = () => {
  const active = useRecoilValue(loaderAtom);
  return (
    active && (
      <div className="absolute grid place-items-center h-screen w-full backdrop-blur z-20 top-0 left-0 right-0 bottom-0">
        <Spinner />
      </div>
    )
  );
};
export default Loader;
