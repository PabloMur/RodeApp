import { NextRequest, NextResponse } from "next/server";
import { createList, getUserLists } from "@/backend/controllers/ListController";

export function POST(req: NextRequest) {
  try {
    const createdList = createList(req);

    // Devolver una respuesta JSON con la lista creada
    return NextResponse.json({ ok: "creando lists", createdList });
  } catch (error) {
    // Manejar errores y devolver una respuesta de error
    return NextResponse.json(
      {
        error: "Error al crear la lista",
      },
      {
        status: 500,
      }
    );
  }
}

export function GET(req: NextRequest) {
  try {
    const lists = getUserLists(req);
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
