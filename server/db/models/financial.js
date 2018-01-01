const Sequelize = require('sequelize')
const db = require('../db')

const Financial = db.define('financial', {
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

module.exports = Financial