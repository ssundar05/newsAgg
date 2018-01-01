
const Sequelize = require('sequelize')
const db = require('../db')

const Entertainment = db.define('entertainment', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  source: {
    type: Sequelize.STRING
  },
})

module.exports = Entertainment