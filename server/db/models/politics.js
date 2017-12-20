
const Sequelize = require('sequelize')
const db = require('../db')

const Politics = db.define('politics', {
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

module.exports = Politics