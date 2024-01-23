import { NextRequest, NextResponse } from "next/server";
import { createList, getUserLists } from "@/backend/controllers/ListController";

export async function POST(req: NextRequest) {
  try {
    const createdList = await createList(req);
    return NextResponse.json({ ok: "creando lists", createdList });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear la lista" },
      { status: 500 }
    );
  }
}

//trae las listas creadas por el usuario
export async function GET(req: NextRequest) {
  try {
    const lists = await getUserLists(req);
    // Devolver las listas como respuesta JSON
    return NextResponse.json({ lists });
  } catch (error) {
    // Manejar errores y devolver una respuesta de error
    return NextResponse.json(
      {
        error: "Error al obtener las listas",
      },
      {
        status: 500, // Utiliza un código de estado que refleje un error interno del servidor
      }
    );
  }
}
