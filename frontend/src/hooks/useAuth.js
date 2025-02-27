import { useState } from "react";

const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return { isAuthenticated: !!token, login, logout };
};

export default useAuth;
