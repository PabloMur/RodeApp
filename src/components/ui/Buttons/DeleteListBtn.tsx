import { deleteListModal } from "@/atoms";
import { useDeleteList } from "@/hooks";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function DeleteListBtn() {
  const [modalState, modaleSetter] = useRecoilState(deleteListModal);

  return (
    <div className="p-2 flex justify-end items-center">
      <button
        className="text-red-500 p-2 border rounded-xl border-red-500"
        onClick={() => {
          modaleSetter(!modalState);
        }}
      >
        Eliminar lista
      </button>
    </div>
  );
}
