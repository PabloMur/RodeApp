"use client";
import { useGetListData } from "@/hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListDetailsPage() {
  const listDataStatePrev: any = {};
  const [listData, listDataSetter] = useState(listDataStatePrev);
  const listDataGetter = useGetListData();
  const listID: any = useParams();
  const getListData = async () => {
    const result = await listDataGetter(listID.listId);
    listDataSetter(result);
    console.log(result);
  };
  useEffect(() => {
    getListData();
  }, []);

  return (
    <div className="p-2">
      <div className="flex flex-col justify-center items-center">
        <p className="text-orange-500">Titulo</p>
        <h2 className="text-2xl">{listData?.data?.listData.name}</h2>
      </div>
    </div>
  );
}
