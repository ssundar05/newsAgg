const router = require('express').Router()
const {Sports} = require('../db/models')



router.get('/', function (req, res, next) {
    Sports.findAll({})
    .then(function (sportsSources) {
      res.json(sportsSources);
    })
    .catch(next);
  });

  module.exports = router