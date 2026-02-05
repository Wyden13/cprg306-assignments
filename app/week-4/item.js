export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-amber-200 mb-4 p-4 rounded-lg shadow-md text-green-900 border border-green-800 border-dashed">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">Quantity: {quantity}</p>
            <p className="text-sm">Category: {category}</p>
        </li>
    )
}