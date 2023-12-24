import { firestore } from "@/lib/FirebaseConn";

interface ListItem {
  name: string;
  status: "incomplete" | "complete";
}

export class ListModel {
  id: string;
  name: string;
  creatorEmail: string;
  category: string;
  items: ListItem[];

  constructor(
    id: string | null,
    name: string,
    creatorEmail: string,
    category: string,
    items: ListItem[]
  ) {
    this.id = id !== null ? id : "";
    this.name = name;
    this.creatorEmail = creatorEmail;
    this.category = category;
    this.items = items;
  }

  // Método estático para crear una instancia de ListModel desde un documento de Firestore
  static async createList(doc: any) {
    const data = doc.data();
    const id = doc.id;
    const name = data.name;
    const creatorEmail = data.creatorEmail;
    const category = data.category; // Agrega la categoría
    const items = data.items || [];

    return new ListModel(id, name, creatorEmail, category, items);
  }

  // Método para agregar un nuevo ítem a la lista
  addItem(itemName: string): void {
    const newItem: ListItem = {
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
      category: this.category,
      items: this.items,
    };
  }

  // Método para almacenar la lista en Firestore
  async saveToListFirestore(): Promise<void> {
    try {
      // Paso 1: Crea un nuevo documento y obtén la referencia
      const docRef = await firestore.collection("list").add({});

      // Paso 2: Obtén el ID del documento recién creado
      const newId = docRef.id;

      // Paso 3: Actualiza el documento con los datos adicionales
      await firestore
        .collection("list")
        .doc(newId)
        .set(this.toFirestoreObject());

      console.log("Lista guardada en Firestore correctamente");
    } catch (error) {
      console.error("Error al guardar la lista en Firestore:", error);
    }
  }
}
