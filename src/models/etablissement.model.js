const { DataTypes } = require("sequelize");
const Equipment = require("./Equipement.model");
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

Etablissement.hasMany(User);
Etablissement.hasMany(Equipment);

module.exports= Etablissement