import React, { useState } from "react";
import { registerUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";  // Form styles
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        
        const userData = {
            name: name.trim(),  // Ensure no extra quotes or spaces
            email: email.trim(),
            password: password,
        };
    
        try {
            const response = await registerUser(userData);
            console.log("User registered:", response);
            navigate("/login")
        } catch (error) {
            console.error("Registration error:", error);
        }
    };
    

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
