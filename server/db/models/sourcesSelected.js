
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
    defaultValue: 'Sports'
  },
  entertainment: {
    type: Sequelize.JSON,
    allowNull: false,
    defaultValue: 'Entertainment'
  },
  financial: {
    type: Sequelize.JSON,

    allowNull: false,
    defaultValue: 'Financial'
  },
  technology: {
    type: Sequelize.JSON,

    allowNull: false,
    defaultValue: 'Technology'
  },
})

module.exports = SourcesSelected