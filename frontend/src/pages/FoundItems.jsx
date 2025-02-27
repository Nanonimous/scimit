import React, { useEffect, useState } from "react";
import { getFoundItems } from "../utils/api";
import ItemCard from "../components/ItemCard";
import "../styles/items.css";  // Found items styles
const FoundItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getFoundItems();
            setItems(data);
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h2>Found Items</h2>
            <div>
                {items.length > 0 ? (
                    items.map((item) => <ItemCard key={item._id} item={item} />)
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
};

export default FoundItems;
