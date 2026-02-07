import Item from "./item";

export default function ItemList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </ul>
    );
}
