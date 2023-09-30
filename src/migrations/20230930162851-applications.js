"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("application", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      app_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dns: {
        type: DataTypes.STRING,
        notNull: { msg: "adresse vide" },
        notEmpty: { msg: "vous devez saisir une adresse valide" },
        validate: {
          isIP4: true,
          is: /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm,
          len: {
            args: [7, 15],
            msg: " un Mask IPv4 doit au minimum 7 a 15 caracteres",
          },
        },
      },
      url: DataTypes.STRING,
      dev_name: DataTypes.STRING,
      dev_tel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
          len: {
            args: [9, 14],
            msg: "Phone Numer",
          },
        },
      },
      app_type: DataTypes.STRING,
      filtred: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      desc: DataTypes.STRING,
      app_path: DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("application");
  },
};