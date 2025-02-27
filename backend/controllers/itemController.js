const Item = require("../models/Item");

exports.reportLostItem = async (req, res) => {
    try {
        // const { name, description, image, userId, proofRequired } = req.body;
        console.log(req.body)
        const item = await Item.create({ name, description, image, userId, proofRequired });

        res.json({ message: "Lost item reported successfully", item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.markAsFound = async (req, res) => {
    try {
        const { itemId } = req.body;
        const item = await Item.findByPk(itemId);

        if (!item) return res.status(404).json({ error: "Item not found" });

        item.status = "found";
        await item.save();

        res.json({ message: "Item marked as found", item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.claimItem = async (req, res) => {
    try {
        const { itemId, proof } = req.body;
        const item = await Item.findByPk(itemId);

        if (!item) return res.status(404).json({ error: "Item not found" });
        if (item.status !== "found") return res.status(400).json({ error: "Item is not marked as found" });

        const isVerified = proof === item.proofRequired;

        if (!isVerified) return res.status(400).json({ error: "Ownership verification failed" });

        item.status = "claimed";
        await item.save();

        res.json({ message: "Item successfully claimed", item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
