"use client";
import DeleteListBtn from "@/components/ui/Buttons/DeleteListBtn";
import ListItem from "@/components/ui/ListItem";
import { useGetListData } from "@/hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DeleteListModal from "@/components/modals/DeleteListModal";
import Loader from "@/components/ui/Loader";
import UpdateListForm from "@/components/forms/UpdateList";

//recordar que esto es una pagina, por lo que se deben migrar todos estos mecanismos a su respectiva representacion como componentes

export default function ListDetailsPage() {
  const [listData, setListData] = useState<any>({});
  const listDataGetter = useGetListData();

  const getListData = async () => {
    try {
      const result = await listDataGetter();
      setListData(result);
    } catch (error) {
      console.error("Error al obtener datos de la lista:", error);
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <div className="p-2 relative min-h-[90vh]">
      <DeleteListModal></DeleteListModal>
      <DeleteListBtn></DeleteListBtn>
      <Loader></Loader>
      <div className="flex flex-col justify-center items-center mb-2">
        <p className="text-orange-500">Titulo</p>
        <h2 className="text-2xl">{listData?.data?.listData?.name}</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-orange-500 text-sm">Categoria</p>
        <h3 className="text-xl">{listData?.data?.listData?.category}</h3>
      </div>
      <div className="p-2">
        <UpdateListForm></UpdateListForm>
      </div>
    </div>
  );
}
