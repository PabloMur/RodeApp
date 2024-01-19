import { useDeleteList } from "@/hooks";

export default function DeleteListBtn() {
  const handleClick = useDeleteList();
  return (
    <div className="p-2 flex justify-end items-center">
      <button
        className="text-red-500 p-2 border rounded-xl border-red-500"
        onClick={handleClick}
      >
        Eliminar lista
      </button>
    </div>
  );
}
