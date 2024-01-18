const { DataTypes } = require("sequelize");
const { getConnection } = require("../services/db.service");

const Etablissement = getConnection().define("etablissement", {
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

Etablissement.associate = function (models) {
  Etablissement.hasMany(models.user);
  Etablissement.hasMany(models.equipment);
};
module.exports = Etablissement;
