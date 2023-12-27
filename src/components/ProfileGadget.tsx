"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileDetails() {
  const { data: session } = useSession();

  return (
    session && (
      <div className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-md border-2 border-orange-500 text-orange-500">
        <Image
          src={String(session.user?.image)}
          width={100}
          height={100}
          alt="Imagen de perfil"
        />
        <h2 className="text-2xl font-semibold">{session.user?.name}</h2>
        <p>{session.user?.email}</p>
      </div>
    )
  );
}
