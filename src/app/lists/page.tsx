"use client";
import ListForm from "@/components/forms/CreateList";
import Loader from "@/components/ui/Loader";
import { useGoTo } from "@/hooks";

export default function Lists() {
  const goto = useGoTo();
  return (
    <div className="p-4 relative">
      <Loader></Loader>
      <ListForm></ListForm>
      <button
        className="bg-orange-500 text-black p-4 rounded-xl mt-4 text-2xl w-full"
        onClick={() => {
          goto("/my-lists");
        }}
      >
        Mis listas
      </button>
    </div>
  );
}
