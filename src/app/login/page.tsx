"use client";
import { useSignin } from "@/hooks";
import { useSession } from "next-auth/react";
export default function Login() {
  const { data: session } = useSession();
  const signIn = useSignin();
  console.log(session);
  return (
    <div>
      Login page
      <button
        onClick={() => {
          signIn();
        }}
      >
        Iniciar Sesion
      </button>
    </div>
  );
}
