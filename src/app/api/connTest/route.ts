import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export function GET(request: NextRequest) {
  console.log(firestore);
  return NextResponse.json({ ok: "test" });
}
