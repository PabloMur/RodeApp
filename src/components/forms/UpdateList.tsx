import React, { useState } from "react";
import ListItem from "../ui/ListItem";

export default function UpdateListForm() {
  const items = ["a", "b", "c"];

  // Inicializa el estado con un objeto donde cada índice está mapeado a un valor booleano
  const initialItemsState: Record<string, boolean> = {};
  items.forEach((item, index) => {
    initialItemsState[index.toString()] = false;
  });

  const [checkedItems, setCheckedItems] = useState(initialItemsState);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Checkboxes seleccionados:", checkedItems);

    // Obtén los índices de los items seleccionados
    const selectedItems = Object.keys(checkedItems)
      .filter((key) => checkedItems[key])
      .map(Number);

    console.log("Índices de los items seleccionados:", selectedItems);
    // Realiza la lógica para actualizar la lista con los valores de checkedItems
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={index.toString()}
              checked={checkedItems[index.toString()]}
              onChange={(e) => handleCheckboxChange(e, index)}
            />
            <label
              htmlFor={index.toString()}
            >{`Opción ${item.toUpperCase()}`}</label>
            {checkedItems[index.toString()] && (
              <ListItem index={index} name={item} status="incomplete" />
            )}
          </div>
        ))}
        <button type="submit">Actualizar lista</button>
      </form>
    </div>
  );
}
