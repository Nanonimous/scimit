import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportLost from "./pages/ReportLost";
import FoundItems from "./pages/FoundItems";
import ClaimItem from "./pages/ClaimItem";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/report-lost" element={<ReportLost />} />
                <Route path="/found-items" element={<FoundItems />} />
                <Route path="/claim-item/:id" element={<ProtectedRoute><ClaimItem /></ProtectedRoute>} />
            </Routes>
        </>
    );
};

export default App;
