export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="mb-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700 cursor-pointer transition-all duration-300 hover:bg-gray-800/80 hover:border-pink-600/50 hover:shadow-lg hover:shadow-pink-600/20 group"
      onClick={() => {
        onSelect(name);
      }}
    >
      <h2 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors">
        {name}
      </h2>
      <div className="mt-2 flex gap-4 text-sm text-gray-400">
        <span>
          Qty: <span className="font-medium text-white">{quantity}</span>
        </span>
        <span>
          Type:{" "}
          <span className="font-medium text-white capitalize">{category}</span>
        </span>
      </div>
    </li>
  );
}
