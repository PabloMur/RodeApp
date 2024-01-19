"use client";
import { deleteListModal } from "@/atoms";
import { useDeleteList } from "@/hooks";
import { useRecoilState, useRecoilValue } from "recoil";

export default function DeleteListModal() {
  const [modalState, modalStateSetter] = useRecoilState(deleteListModal);

  return (
    modalState && (
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full  backdrop-blur-xl flex justify-center items-center">
        <div className="p-4 rounded-2xl border-2 border-orange-500">
          <h3 className="m-4 text-xl text-orange-500">
            Estas seguro de eliminar esta lista?
          </h3>
          <div className="flex justify-between items-center gap-4">
            <button
              className="p-2 bg-red-500 w-full rounded-xl font-bold"
              onClick={() => {
                modalStateSetter(!modalState);
              }}
            >
              Cancelar
            </button>
            <button className="p-2 bg-green-500 w-full rounded-xl text-black font-bold">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );
}
