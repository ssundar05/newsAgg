const Sequelize = require('sequelize')
const db = require('../db')

const Technology = db.define('technology', {
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

module.exports = Technology