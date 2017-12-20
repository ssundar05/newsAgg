
const Sequelize = require('sequelize')
const db = require('../db')

const SourcesSelected = db.define('sourcesSelected', {
  politics: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  sports: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  entertainment: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  financial: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  technology: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
})

module.exports = SourcesSelected