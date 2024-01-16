import { firestore } from "@/lib/FirebaseConn";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log(firestore);
  console.log(process.env.FIRESTORE_API_KEY);
  return NextResponse.json({
    hola: "hola",
  });
}
