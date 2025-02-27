const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "secretKey");

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
};
