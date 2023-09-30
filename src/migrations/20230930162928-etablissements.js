"use strict";
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("etablissement", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primarykey: true,
        autoIncrement: true,
      },
      Nom_etabli: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Adresse_etabli: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Code_postal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("etablissement");
  },
};
