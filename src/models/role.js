const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("roles", {
	name: {
		type: DataTypes.ENUM("USER", "ADMIN"),
		allowNull: false,
	},
});
