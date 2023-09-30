const { DataTypes } = require("sequelize");
const Equipment = require("./Equipement");
const {getConnection}=requir('../services/db.service')



const Etablissement= getConnection().define('Etablissement',{
    Nom_etabli: {
        type :DataTypes.STRING,
        allowNull:false,
    },
    Adresse_etabli: {
        type :DataTypes.STRING,
        allowNull:true,
    },
    Code_postal: {
        type :DataTypes.STRING,
        allowNull:true,
    },
})

Etablissement.associate = function (models) {
Etablissement.hasMany(models.User);
Etablissement.hasMany(models.Equipment);
}
module.exports= Etablissement