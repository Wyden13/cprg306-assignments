export default function Item({ name, quantity, category }) {
    return (
        <div className="bg-gray-100 mb-4 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">Quantity: {quantity}</p>
            <p className="text-sm">Category: {category}</p>
        </div>
    );
}