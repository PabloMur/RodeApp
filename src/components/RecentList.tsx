import Image from "next/image";
import historyIcon from "../../public/history.svg";

export default function RecentList() {
  return (
    <div className="border-2 border-orange-500 rounded-2xl text-orange-500 p-2 w-full">
      <p className="m-2">Lista reciente:</p>
      <div className="bg-orange-500 w-full p-4 text-black rounded-xl flex justify-between items-center">
        <p className="text-xl">Titulo de la ultima lista</p>
        <Image
          src={historyIcon}
          alt="history icon"
          width={25}
          height={25}
        ></Image>
      </div>
    </div>
  );
}
