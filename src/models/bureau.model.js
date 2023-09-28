const {DataTypes} = require('sequelize')
const {getConnection} = require('./services/db.service');

const bureau = getConnection().Define("user",{
name : {
   type : DataTypes.STRING,
   AllowNull : false
},
email: {
type : DataTypes.STRING,
AllowNull : false,
validator: {
    value: email
}
},
password: {
    type : DataTypes.STRING,
    validator : {
        min : 10
    }

})

modules.export = user