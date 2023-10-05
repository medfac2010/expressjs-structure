const { DataTypes } = require("sequelize");
const { getConnection } = require("../services/db.service");
//const Etablissement = require('./etablissement')
//const Bureau = require('./bureau')
//const Application = require('./application')


const Equipment = getConnection().define('equipment', {
    ip_add: {
    type: DataTypes.STRING,
    allowNull: false,
    notNull: {msg: 'adresse null'},
    notEmpty: {msg: 'vous devez saisir une adresse valide'},
    validate :{
        isIP4: true,
        is: /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm,
        len: {
            args: [7, 15],
            msg:" une adresse IPv4 doit au minimum 7 a 15 caracteres"
        } 
    }
    },
    mask_add: {
        type: DataTypes.STRING,
        allowNull: false,
        notNull: {msg: 'adresse vide'},
        notEmpty: {msg: 'vous devez saisir une adresse valide'},
        validate :{
        isIP4: true,
        is: /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm,
        len: {
            args: [7, 15],
            msg:" un Mask IPv4 doit au minimum 7 a 15 caracteres"
            },
        }
    },
    mac_add :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is: /^[0-9a-f]{1,2}([\.:-])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/i,
            len: 17,
        }
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
        allowNull: true,
        validate: {
        is: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/i,
        len: {
            args: [9, 14],
            msg: "Numero de Mobile non valide",
        },
        },
    },
    tel_Bureau : {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
        is: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
        len: {
            args: [9, 14],
            msg: "Numero de Telephone bureau",
        },
        },
    },
    tel_mob: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        is: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
        len: {
            args: [9, 14],
            msg: "Phone Numer",
        },
        },
    },
    type_dispo: DataTypes.STRING,
    nom_pc : DataTypes.STRING,
    domaine : DataTypes.STRING,
    num_serie : DataTypes.STRING,
    responsable_name : {
        type: DataTypes.STRING,
        allowNull: false,
        },
    antivirus : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    mdp_sec : DataTypes.STRING,
    Haut_debit : DataTypes.BOOLEAN,
    Autrise_access : DataTypes.BOOLEAN,
    sec_info : DataTypes.BOOLEAN,
})
Equipment.associate = function (models) {
Equipment.belongsTo(models.etablissement);
Equipment.belongsTo(models.bureau);
Equipment.hasMany(models.application,{through: "equipment_application"});
}
module.exports = Equipment