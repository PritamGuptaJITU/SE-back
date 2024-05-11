const { DataTypes } = require('sequelize');
const db = require('../db');

const Sample = db.define('sample', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
    allowNull: false,
      },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports=Sample;
