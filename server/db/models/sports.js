const Sequelize = require('sequelize')
const db = require('../db')

const Sports = db.define('sports', {
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

module.exports = Sports