"use client";
import { menuAtom } from "@/atoms";
import { useRecoilState } from "recoil";
import cross from "../../../../public/cross.svg";
import lines from "../../../../public/burger.svg";
import Image from "next/image";

const CrossBtn = ({ status, setter }: any) => {
  const handleClick = () => {
    setter(!status);
  };
  return (
    <button onClick={handleClick}>
      <Image
        alt="imagen svg de cruz"
        src={cross}
        height={30}
        width={30}
      ></Image>
    </button>
  );
};
const Lines = ({ status, setter }: any) => {
  const handleClick = () => {
    setter(!status);
  };
  return (
    <button onClick={handleClick}>
      <Image
        alt="imagen svg de tres lines"
        src={lines}
        height={30}
        width={30}
      ></Image>
    </button>
  );
};
export function BurguerBtn() {
  const [menuStatus, menuStatusSetter] = useRecoilState(menuAtom);
  return menuStatus ? (
    <CrossBtn status={menuStatus} setter={menuStatusSetter} />
  ) : (
    <Lines status={menuStatus} setter={menuStatusSetter} />
  );
}
