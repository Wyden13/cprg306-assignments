import ItemList from "./item-list";
import items from "./items.json"

export default function Page() {
    return(
        <main className ="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Shopping List</h1>
            <ItemList items = {items} />
        </main>
    )
}