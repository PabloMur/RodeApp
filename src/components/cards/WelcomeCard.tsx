"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function WelcomeCard() {
  const { data: session } = useSession();
  return (
    <div className="border-2 border-orange-500 rounded-2xl p-4 w-full flex justify-between items-center">
      <h2>Welcome</h2>
      <div className=" flex justify-center items-center gap-3">
        <h2>{session?.user?.name}</h2>
        <Image
          src={session?.user?.image as string}
          alt="imagen de cuenta de google del usuario"
          height={30}
          width={30}
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
}
