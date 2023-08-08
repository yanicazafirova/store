import { ItemList } from "../items/ItemList";

export const CategoryItemList = ({ items, category }) => {
    const filteredItems = items.filter(item => item.category === category);

    return <ItemList items={filteredItems} />;
};