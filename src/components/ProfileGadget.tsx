"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileDetails() {
  const { data: session } = useSession();

  return (
    session && (
      <div className="max-w-md mx-auto mt-8 p-6  shadow-md border-2 border-orange-500 text-orange-500 flex flex-col justify-center items-center rounded-2xl">
        <Image
          src={String(session.user?.image)}
          width={100}
          height={100}
          alt="Imagen de perfil"
          className="rounded-full"
        />
        <h2 className="text-2xl font-semibold m-2">{session.user?.name}</h2>
        <p>{session.user?.email}</p>
      </div>
    )
  );
}
