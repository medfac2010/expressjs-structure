'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('equipements', { 
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        ip_add: {
          type: DataTypes.STRING,
          allowNull: false,
           validate :{
               len: {
                  args: [7, 15],
              } 
          }
          },
          mask_add: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          mac_add :{
              type: DataTypes.STRING,
              allowNull: false,
          },
          email: {
              type: DataTypes.STRING,
              allowNull: false,
              isEmail: true,
              unique: true,
          },
          tel_mob: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          tel_Bureau : {
              type: DataTypes.STRING,
              allowNull: true,
          },
          tel_mob: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
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

      });
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('equipements');
 
  }
};
