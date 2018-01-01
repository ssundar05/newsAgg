const router = require('express').Router()
const {Financial} = require('../db/models')



router.get('/', function (req, res, next) {
    Financial.findAll({})
    .then(function (financialSources) {
      res.json(financialSources);
    })
    .catch(next);
  });

  module.exports = router