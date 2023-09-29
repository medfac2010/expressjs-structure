const { DataTypes } = require("sequelize");
const {getConnection}=requir('../services/db.service')

const con =getConnection()

const Etablissement= con.define('Etablissement',{
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

module.exports= Etablissement