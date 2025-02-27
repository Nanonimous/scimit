import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemById, claimItem } from "../utils/api";

const ClaimItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [verificationCode, setVerificationCode] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            const data = await getItemById(id);
            setItem(data);
        };
        fetchItem();
    }, [id]);

    const handleClaim = async () => {
        const success = await claimItem(id, verificationCode);
        if (success) navigate("/found-items");
    };

    return (
        <div>
            {item ? (
                <>
                    <img src={item.imageUrl} alt={item.name} width="200" />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <input type="text" placeholder="Enter verification code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                    <button onClick={handleClaim}>Claim Item</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ClaimItem;
