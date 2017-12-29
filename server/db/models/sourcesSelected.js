
const Sequelize = require('sequelize')
const db = require('../db')

const SourcesSelected = db.define('sourcesSelected', {
  politics: {
    type: Sequelize.JSON,
    allowNull: false,
    defaultValue: 'Politics'
  },
  sports: {
    type: Sequelize.JSON,
   
    allowNull: false,
    defaultValue: ''
  },
  entertainment: {
    type: Sequelize.JSON,

    allowNull: false,
    defaultValue: ''
  },
  financial: {
    type: Sequelize.JSON,

    allowNull: false,
    defaultValue: ''
  },
  technology: {
    type: Sequelize.JSON,

    allowNull: false,
    defaultValue: ''
  },
})

module.exports = SourcesSelected