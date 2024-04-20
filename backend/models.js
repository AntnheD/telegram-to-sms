// models.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { Student };
