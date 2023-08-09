import { useState } from "react";

import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";



export default function App() {

  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 3, description: "Charger", quantity: 4, packed: false }
  ]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }
  function handleCheckItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }
  function handleClearList() {
    const confirmed = window.confirm("Do you wanna delete items in your Packaging List ?");
    if (confirmed)
      setItems([]);

  }


  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItems} />
        <PackingList items={items} onDeleteItem={handleDeleteItem} onCheckItem={handleCheckItem} onClearList={handleClearList} />
        <Stats items={items} />

      </div>
    </>
  );
}