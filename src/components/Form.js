import { useState } from "react";
export function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);



    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false
        }
        onAddItem(newItem);

        // ? Setting to Normal State
        setDescription("");
        setQuantity(1);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="add-form">
                <h3>What do you need for your 🤩 trip ?</h3>
                <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
                    {
                        Array.from({ length: 20 }, (_, index) => index + 1).map(num => {
                            return <option value={num} key={num}>{num}</option>
                        })
                    }
                </select>
                <input type="text" placeholder="Item..." value={description} onChange={e => setDescription(e.target.value)}></input>
                <button>Add</button>
            </form>
        </>
    )
}