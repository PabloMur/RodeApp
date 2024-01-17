import { NextRequest, NextResponse } from "next/server";
import { getListData } from "@/backend/controllers/ListController";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const listData = await getListData(params.id);
    return NextResponse.json({ listData });
  } catch (error) {
    console.error("Error en la solicitud GET:", error);

    // Puedes personalizar la respuesta de error según tus necesidades
    return NextResponse.json(
      {
        error: "Error en la solicitud GET",
      },
      { status: 500 }
    );
  }
}
