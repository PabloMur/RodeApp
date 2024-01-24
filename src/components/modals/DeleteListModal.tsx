"use client";
import { deleteListModal, lastListID } from "@/atoms";
import { useDeleteList } from "@/hooks";
import { useRecoilState, useRecoilValue } from "recoil";

export default function DeleteListModal() {
  const [modalState, modalStateSetter] = useRecoilState(deleteListModal);
  const deleteListHook = useDeleteList();
  const handleDeleteList = async () => {
    await deleteListHook();
  };
  const handleCloseModal = () => {
    modalStateSetter(false);
  };

  return (
    modalState && (
      <div
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full  backdrop-blur-xl flex justify-center items-center p-4"
        onClick={handleCloseModal}
      >
        <div className="p-4 rounded-2xl border-2 border-orange-500 bg-black">
          <h3 className="m-4 text-xl text-orange-500">
            Estas seguro de eliminar esta lista?
          </h3>
          <div className="flex justify-between items-center gap-4">
            <button
              className="p-2 bg-red-500 w-full rounded-xl font-bold text-black"
              onClick={() => {
                modalStateSetter(!modalState);
              }}
            >
              Cancelar
            </button>
            <button
              className="p-2 bg-green-500 w-full rounded-xl text-black font-bold"
              onClick={handleDeleteList}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );
}
