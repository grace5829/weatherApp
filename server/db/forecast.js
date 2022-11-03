const Sequelize = require('sequelize');
const db = require('./database');
const { DataTypes } = require("sequelize");

const Forecast = db.define('forecast', {
  temp: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  windSpeed:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  weather:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  weekday:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  realFeel:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  activity1:{
    type: Sequelize.STRING,
  },
  activity2:{
    type: Sequelize.STRING,
  },
  activity3:{
    type: Sequelize.STRING,
  },
  historyName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  historyDescription:{
    type: Sequelize.TEXT('long'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  historyImageUrl: {
    type: Sequelize.TEXT,
  }
});

module.exports = Forecast