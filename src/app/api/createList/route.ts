import { NextRequest, NextResponse } from "next/server";
import { createList } from "@/backend/controllers/ListController";
export async function POST(req: NextRequest) {
  const createdList = await createList(req);
  return NextResponse.json({ ok: "creando lists", createdList });
}
