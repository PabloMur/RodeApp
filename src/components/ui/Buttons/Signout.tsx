"use client";
import { useLogOut } from "@/hooks";
export default function SignoutBtn() {
  const closeSession = useLogOut();
  return (
    <button
      onClick={() => {
        closeSession();
      }}
    >
      Cerrar Sesión
    </button>
  );
}
