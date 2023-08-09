import { useState } from "react";
import { Item } from "./Item";
export function PackingList({ items, onDeleteItem, onCheckItem, onClearList }) {
  const [sortBy, setSortBy] = useState('description');

  let sortedItems = [];


  switch (sortBy) {
    case 'input':
      sortedItems = items;
      break;
    case 'description':
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));

      break;
    case 'packed':
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));

      break;
    default:
      break;
  }


  return (
    <>

      <span className="list">
        <ul className="list">
          {
            sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />)
          }
        </ul>

        <div className="actions">

          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description order</option>
            <option value="packed">Sort by packed order</option>
          </select>
          <button onClick={onClearList}>clear list</button>
        </div>
      </span>


    </>
  )
}