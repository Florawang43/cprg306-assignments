export default function Item({ name, quantity, category }) {
  console.log(name, quantity, category);
  return (
    <div>
      <h2>{name}</h2>
      <div>
        Buy {quantity} in {category}
      </div>
    </div>
  );
}
