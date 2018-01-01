const router = require('express').Router()
const {Technology} = require('../db/models')



router.get('/', function (req, res, next) {
    Technology.findAll({})
    .then(function (technologySources) {
      res.json(technologySources);
    })
    .catch(next);
  });

  module.exports = router