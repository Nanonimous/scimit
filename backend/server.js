const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

// ✅ Fix CORS Issue
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true // Allow cookies if using authentication
}));

// Middleware
app.use(express.json()); // ✅ This ensures Express can parse JSON
app.use(express.urlencoded({ extended: true })); // ✅ Helps parse URL-encoded bodies


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

// Database Sync
sequelize.sync().then(() => {
    console.log("Database connected and models synced!");
}).catch(err => console.error("DB Sync Error:", err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
