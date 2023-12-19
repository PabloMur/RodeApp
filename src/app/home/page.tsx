"use client";
import WelcomeCard from "@/components/cards/WelcomeCard";
import { useSession } from "next-auth/react";
export default function MainPanel() {
  const { data: session } = useSession();
  return (
    <div className="flex  flex-col justify-start items-center h-[88vh] w-full p-2">
      <WelcomeCard></WelcomeCard>
      <h2>Welcome {session?.user?.name}</h2>
    </div>
  );
}
