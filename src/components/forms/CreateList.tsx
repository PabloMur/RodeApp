"use client";
import { useState } from "react";

export default function ListForm() {
  const [name, setName] = useState("");
  const [creatorEmail, setCreatorEmail] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState("");
  const [itemList, setItemList] = useState<string[]>([]);

  const handleAddItem = () => {
    if (items.trim() !== "") {
      setItemList([...itemList, items.trim()]);
      setItems("");
    }
  };

  const handleRemoveItem = (index: any) => {
    const newItems = [...itemList];
    newItems.splice(index, 1);
    setItemList(newItems);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validar y procesar el formulario

    // Mostrar los datos de la lista resultante en la consola
    console.log("Nombre:", name);
    console.log("Email del Creador:", creatorEmail);
    console.log("Categoría:", category);
    console.log("Lista de Items:", itemList);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md text-black">
      <h2 className="text-2xl font-semibold mb-4">Crear Nueva Lista</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre de la Lista
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="creatorEmail"
            className="block text-sm font-medium text-gray-600"
          >
            Email del Creador
          </label>
          <input
            type="email"
            id="creatorEmail"
            name="creatorEmail"
            value={creatorEmail}
            onChange={(e) => setCreatorEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Categoría
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="items"
            className="block text-sm font-medium text-gray-600"
          >
            Items
          </label>
          <div className="flex">
            <input
              type="text"
              id="items"
              name="items"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              className="mt-1 p-2 w-full border rounded-l-md"
            />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
              onClick={handleAddItem}
            >
              Agregar
            </button>
          </div>
          <ul className="list-disc mt-2 ml-4">
            {itemList.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                {item}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Crear Lista
        </button>
      </form>
    </div>
  );
}
