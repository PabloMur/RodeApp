// Importa el modelo y otras dependencias según sea necesario
import { ListModel } from "@/backend/models/ListModel";
import { NextRequest, NextResponse } from "next/server";

// Función para crear una nueva lista
export async function createList(req: NextRequest): Promise<NextResponse> {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { name, creatorEmail, items, category } = await req.json();

    // Crea una nueva instancia de ListModel
    const newList = new ListModel(null, name, creatorEmail, category, items);

    // Guarda la nueva lista en la base de datos
    const createdList = await newList.saveToListFirestore();

    // Devuelve una respuesta con la lista recién creada
    return NextResponse.json({ createdList }, { status: 201 });
  } catch (error) {
    // Devuelve una respuesta de error en caso de problemas
    return NextResponse.json(
      { error: "Error al crear la lista" },
      { status: 500 }
    );
  }
}

// Función para obtener todas las listas// Función para obtener todas las listas
