"use client";
import Image from "next/image";
import historyIcon from "../../public/history.svg";
import { useGetRecentList, useGoTo } from "@/hooks";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { lastListID } from "@/atoms";

export default function RecentList() {
  const recentListData: any = {};
  const goto = useGoTo();
  const getRecentList = useGetRecentList();
  const [recentList, setRecentList] = useState(recentListData);
  const recentListID = useRecoilValue(lastListID);

  const handleRecentListData = async () => {
    const result = await getRecentList();
    setRecentList(result);
  };

  const handleClick = () => {
    goto(`/lists/${recentListID}`);
  };
  useEffect(() => {
    handleRecentListData();
  }, []);
  return (
    <div className="border-2 border-orange-500 rounded-2xl text-orange-500 p-2 w-full">
      <p className="m-2">Lista reciente:</p>
      <div
        className="bg-orange-500 w-full p-4 text-black rounded-xl flex justify-between items-center"
        onClick={handleClick}
      >
        <p className="text-xl">{recentList?.data?.listData?.name}</p>
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
