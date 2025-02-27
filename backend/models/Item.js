const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Item = sequelize.define("Item", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.ENUM("lost", "found", "claimed"), defaultValue: "lost" },
    userId: { type: DataTypes.UUID, allowNull: false },
    proofRequired: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Item;
