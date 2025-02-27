import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/navbar.css";  // Navbar styles
const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/found-items">Found Items</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/report-lost">Report Lost</Link>
                    <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
