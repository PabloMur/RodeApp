"use client";
import React, { useEffect, useState } from "react";
import ListItem from "../ui/ListItem";
import { useGetListData, useGetUpdateListItems } from "@/hooks";

export default function UpdateListForm() {
  const getListItems = useGetListData();
  const [items, setItems] = useState([{ name: "a", status: "incomplete" }]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const updateList = useGetUpdateListItems();

  useEffect(() => {
    const getItems = async () => {
      const itemList = await getListItems();
      setItems(itemList.data.listData.items);
    };
    getItems();
  }, []);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index.toString()]: checked,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Checkboxes seleccionados:", checkedItems);

    // Obtén los índices de los items seleccionados
    const selectedItems = Object.keys(checkedItems)
      .filter((key) => checkedItems[key])
      .map(Number);

    console.log("Índices de los items seleccionados:", selectedItems);
    await updateList(selectedItems);
    // Realiza la lógica para actualizar la lista con los valores de checkedItems
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <div key={index}>
            <ListItem
              index={index.toString()}
              name={item.name}
              status={item.status}
              checked={checkedItems[index.toString()]}
              onChange={(e: any) => handleCheckboxChange(e, index)}
            />
          </div>
        ))}
        <button className="w-full text-orange-500 text-xl font-bold border-2 rounded-xl border-orange-500 p-3">
          Actualizar
        </button>
      </form>
    </div>
  );
}
