const API_BASE_URL = "http://localhost:5000/api";

export const loginUser = async (userData) => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData), // ✅ Ensure JSON format
            credentials: "include" // ✅ Include credentials if needed
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Login failed");
        }

        return await response.json();
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
};



export const registerUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error("Registration failed");
    }

    return response.json();
};

// Report lost item
export const reportLostItem = async (formData) => {
    const response = await fetch(`${API_BASE_URL}/items/report`, {
        method: "POST",
        body: formData,
    });
    return response.json();
};

// Get all found items
export const getFoundItems = async () => {
    const response = await fetch(`${API_BASE_URL}/items/found`);
    return response.json();
};

// Get single item by ID
export const getItemById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`);
    return response.json();
};

// Claim item
export const claimItem = async (id, verificationCode) => {
    const response = await fetch(`${API_BASE_URL}/items/claim/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verificationCode }),
    });
    return response.json();
};
