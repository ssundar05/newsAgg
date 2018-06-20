const Sequelize = require('sequelize')
const db = new Sequelize(
  'postgres://yuufrweqfsktnj:c527d166149b11953dddc7a2bb2bdf877b92fe04c95d55a5a8b5a438e0ed042a@ec2-50-19-86-139.compute-1.amazonaws.com:5432/dfs9sfh1n96pi6' || 'postgres://localhost:5432/newAgg', {
    logging: false
  }
)
module.exports = db
