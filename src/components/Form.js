import { useState } from "react";

export default function Form({ onAddItems }) {
  //Instead of letting DOM control elements, we are using "controlled elements" here so we have React control state of these elements for use.
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //If there's no value in the entry box, then don't allow to submit.

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    //After user hits enter, to submit form, reset values.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {" "}
      {/*Or you can do e=>handleSubmit(e) above*/}
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} //Notice here where are converting the value to a number, b/c when initializing state, we used a number, so don't wanna use a string here.
      >
        {/*Insted of writing 20 or whatever <option elements do below way*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
