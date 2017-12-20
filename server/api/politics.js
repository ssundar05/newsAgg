
const router = require('express').Router()
const {Politics} = require('../db/models')



router.get('/', function (req, res, next) {
    Politics.findAll({})
    .then(function (polSources) {
      res.json(polSources);
    })
    .catch(next);
  });

  module.exports = router