const { DataTypes } = require("sequelize");
const { getConnection } = require("../services/db.service");
const Etablissement = require("./etablissement");
const Equipement = require("./Equipement");


const Bureau = getConnection().define("bureau", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_bureau : {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
Bureau.associate = function (models) {
  Bureau.blongsToMany(models.Etablissement, { trought: Equipement });
  Bureau.hasMany(models.Equipement);
};
module.exports = Bureau;
