const {DataTypes} = require('sequelize')
const {getConnection} = require('./services/db.service');
const Etablissement = require('./etablissement');
const Equipement = require('./Equipement');

const Bureau = getConnection().Define("user",{
nom : {
   type : DataTypes.STRING,
   AllowNull : false
},
Num: DataTypes.NUMBER,
})
Bureau.associate = function (models) {
Bureau.blongsToMany(models.Etablissement,{trought: Equipement})
Bureau.hasMany(models.Equipement)
}
modules.export = Bureau