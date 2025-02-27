const express = require("express");
const { reportLostItem, markAsFound, claimItem } = require("../controllers/itemController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/report", reportLostItem);
router.post("/found", authMiddleware, markAsFound);
router.post("/claim", authMiddleware, claimItem);

module.exports = router;
