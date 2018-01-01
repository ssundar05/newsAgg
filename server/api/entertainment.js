const router = require('express').Router()
const {Entertainment} = require('../db/models')



router.get('/', function (req, res, next) {
    Entertainment.findAll({})
    .then(function (entertainmentSources) {
      res.json(entertainmentSources);
    })
    .catch(next);
  });

  module.exports = router