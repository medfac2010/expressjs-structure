const { getConnection } = require("./servces/db.service");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const con = getConnection();
const User = con.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
    },
    psudeo: {
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
          rags: [8, 100],
          msg: "le mot de passe doit contenu au minimume 8 caratéres ",
        },
      },
      set(val) {
        if (val === this.confirmedPassowrd) {
          const hashedPassword = bcrypt.hashSync(valn, 10);
          this.setDataValue(password, hashedPassword);
        }
      },
    },
    confirmedPassowrd: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notNull: { msg: "Les mot de passe doit étre Edentique" },
        notEmpty: { msg: "SVP resaisez le mot de passe pour confermer" },
        len: {
          rags: [8, 100],
          msg: "le mot de passe doit contenu au moins 8 caratéres et 100 au plus",
        },
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
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
          len: {
            args: [9,14],
            msg: "Phone Numer",
          },
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue:true,
      },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updated_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  { timeStamp: true }
);

User.belongsTo(Etablissement);

module.exports = User;