export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>{" "}
      {/*Notice we are doing a callback function instead of function declaration like just {onDeleteItem},
            b/c that will just pass in the event argument instead of allowing you to pass in actual item id as param */}
    </li>
  );
}
