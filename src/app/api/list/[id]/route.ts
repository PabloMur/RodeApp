import { NextRequest, NextResponse } from "next/server";
import { deleteList, getListData } from "@/backend/controllers/ListController";

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

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    await deleteList(params.id);
    return NextResponse.json({ listDeleted: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error en la solicitud DELETE",
      },
      { status: 500 }
    );
  }
}
