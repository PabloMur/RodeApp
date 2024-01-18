"use client";
import ListItem from "@/components/ui/ListItem";
import { useGetListData } from "@/hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListDetailsPage() {
  const [listData, setListData] = useState<any>({});
  const listDataGetter = useGetListData();
  const { listId }: any = useParams();

  const getListData = async () => {
    try {
      const result = await listDataGetter(listId);
      setListData(result);
    } catch (error) {
      console.error("Error al obtener datos de la lista:", error);
    }
  };

  useEffect(() => {
    getListData();
  }, [listId]);

  return (
    <div className="p-2">
      <div className="flex flex-col justify-center items-center mb-2">
        <p className="text-orange-500">Titulo</p>
        <h2 className="text-2xl">{listData?.data?.listData.name}</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-orange-500 text-sm">Categoria</p>
        <h3 className="text-xl">{listData?.data?.listData.category}</h3>
      </div>
      <div className="p-2">
        {/* Añade un paréntesis de cierre en Object.values() */}
        {Object.values(listData?.data?.listData.items || {}).map(
          (item: any) => (
            <ListItem index={item.id} name={item.name} status={item.status} />
          )
        )}
      </div>
    </div>
  );
}
