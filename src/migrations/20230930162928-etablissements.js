"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("etablissement", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
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
