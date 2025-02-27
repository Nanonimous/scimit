import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import useAuth from "../hooks/useAuth";
import "../styles/forms.css";  // Form styles
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
        email: email.trim(), // Ensure no extra spaces
        password: password.trim()
    };

    try {
        const response = await loginUser(userData);
        console.log("Login Success:", response);
        navigate("/")
    } catch (error) {
        console.error("Login Failed:", error);
    }
};


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
