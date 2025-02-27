import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <img src={item.imageUrl} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Link to={`/claim-item/${item._id}`}>Claim</Link>
        </div>
    );
};

export default ItemCard;
