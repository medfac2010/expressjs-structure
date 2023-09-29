const {DataTypes} = require('sequelize')
const {getConnection} = require('./services/db.service');
const Etablissement = require('./etablissement.model');
const Equipement = require('./Equipement.model');

const Bureau = getConnection().Define("user",{
nom : {
   type : DataTypes.STRING,
   AllowNull : false
},
Num: DataTypes.NUMBER,
})

Bureau.blongsToMany(Etablissement,{trought: Equipement})
Bureau.hasMany(Equipement)

modules.export = Bureau