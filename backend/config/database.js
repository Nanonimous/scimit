const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lost_found_db", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

module.exports = { sequelize };
