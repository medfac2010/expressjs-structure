"use strict";
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("user", {
      Nom_prenom: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
      },
      User_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "le mot de pass est obligatoire" },
          notEmpty: { msg: "SVP saisez un mot de passe" },
          len: {
            args: [8, 100],
            msg: "le mot de passe doit contenu au minimume 8 caratéres ",
          }, 
        },
        set(val) {
          if (val === this.confirmedPassowrd) {
            const hashedPassword = bcrypt.hashSync(val, 10);
            this.setDataValue(password, hashedPassword);
          }
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true,
        validate: {
          len: {
            min: 10,
            msg: "Saisez un Email SVP",
          },
        },
      },
      tel_mob: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
          len: {
            args: [9, 14],
            msg: "Phone Numero",
          },
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      conf_chemin: DataTypes.STRING,
      confirmedPassowrd: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
          notNull: { msg: "Les mot de passe doit étre Edentique" },
          notEmpty: { msg: "SVP resaisez le mot de passe pour confermer" },
          len: {
            args: [8, 100],
            msg: "le mot de passe doit contenu au moins 8 caratéres et 100 au plus",
          },
        },
      },
    });
  },

  down: function (queryInterface, DataTypes) {
    return queryInterface.dropTable("user");
  },
};
