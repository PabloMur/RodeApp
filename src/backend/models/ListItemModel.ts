import { firestore } from "@/lib/firebase";

export interface ListItemModel {
  name: string;
  status: "incomplete" | "complete";
}

export class ListModel {
  id: string;
  name: string;
  creatorEmail: string;
  items: ListItemModel[];

  constructor(
    id: string,
    name: string,
    creatorEmail: string,
    items: ListItemModel[]
  ) {
    this.id = id;
    this.name = name;
    this.creatorEmail = creatorEmail;
    this.items = items;
  }

  // Método estático para crear una instancia de ListModel desde un documento de Firestore
  static fromFirestore(doc: firestore.QueryDocumentSnapshot): ListModel {
    const data = doc.data();
    const id = doc.id;
    const name = data.name;
    const creatorEmail = data.creatorEmail;
    const items = data.items || [];

    return new ListModel(id, name, creatorEmail, items);
  }

  // Método para agregar un nuevo ítem a la lista
  addItem(itemName: string): void {
    const newItem: ListItemModel = {
      name: itemName,
      status: "incomplete",
    };

    this.items.push(newItem);
  }

  // Método para marcar un ítem como completo
  markItemComplete(itemIndex: number): void {
    if (itemIndex >= 0 && itemIndex < this.items.length) {
      this.items[itemIndex].status = "complete";
    }
  }

  // Método para convertir la instancia de ListModel a un objeto que se pueda almacenar en Firestore
  toFirestoreObject(): Record<string, any> {
    return {
      name: this.name,
      creatorEmail: this.creatorEmail,
      items: this.items,
    };
  }
}
