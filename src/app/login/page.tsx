"use client";
import { useSignin } from "@/hooks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import google from "../../../public/google.svg";
export default function Login() {
  const { data: session } = useSession();
  const signIn = useSignin();
  console.log(session);
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <button
        className=" bg-orange-500 p-3 rounded-full text-black text-xl flex items-center gap-2"
        onClick={() => {
          signIn();
        }}
      >
        <p>Iniciar Sesion</p>
        <div className="rounded-full bg-white p-2">
          <Image src={google} alt="google icon" width={30} height={30}></Image>
        </div>
      </button>
    </div>
  );
}
