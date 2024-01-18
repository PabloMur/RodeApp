"use client";
import MiniList from "@/components/MiniList";
import { useGetUserList } from "@/hooks";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

// Componente MyListPage
export default function MyListPage() {
  // Utiliza el hook correcto
  const getUserLists = useGetUserList();

  // Estado para almacenar las listas
  const [lists, setLists] = useState([]);

  // useEffect con una función de retorno para evitar el bucle infinito
  useEffect(() => {
    // Función asincrónica para obtener las listas del usuario
    const fetchData = async () => {
      try {
        // Llama al hook para obtener las listas
        const response = await getUserLists();

        // Actualiza el estado con las listas obtenidas
        setLists(response.data.lists || []);
      } catch (error) {
        console.error("Error al obtener las listas:", error);
        // Maneja el error según tus necesidades
      }
    };

    // Llama a la función asincrónica
    fetchData();
  }, []); // Pasa un arreglo vacío como dependencia para ejecutar el efecto solo una vez

  // Renderiza el componente
  return (
    <div className="flex flex-col justify-center items-center p-4 relative">
      <h2 className="text-orange-500 text-2xl m-4">Mis Listas</h2>
      <Loader></Loader>
      {Array.isArray(lists) &&
        lists.map((list: any) => (
          <MiniList key={list.id} id={list.id} title={list.name} />
        ))}
    </div>
  );
}
