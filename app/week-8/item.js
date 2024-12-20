export default function Item({ key, item, onSelect }) {
  const { name, quantity, category } = item;
  return (
    <li
      className="p-2 m-4 bg-slate-900 max-w-sm"
      onClick={() => onSelect(name)}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
