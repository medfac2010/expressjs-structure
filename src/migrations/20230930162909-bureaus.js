"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bureau", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      Num: DataTypes.NUMBER,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bureau");
  },
};
