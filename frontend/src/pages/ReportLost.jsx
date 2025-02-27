import React, { useState } from "react";
import { reportLostItem } from "../utils/api";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";  // Form styles
const ReportLost = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        // formData.append("image", image);

        await reportLostItem(formData);
        navigate("/found-items");
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            {/* <input type="file" accept="image/*" onChange={handleFileChange} required /> */}
            <button type="submit">Report Lost Item</button>
        </form>
    );
};

export default ReportLost;
