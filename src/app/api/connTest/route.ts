import { firestore } from "@/lib/FirebaseConn";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log(firestore);
  return NextResponse.json({
    hola: "hola",
  });
}
