const router = require('express').Router()
// const {SourcesSelected} = require('../db/models')
const {User, SourcesSelected, Politics} = require('../db/models')


router.put('/', function (req, res, next) {
    User.find({where: {email: req.user.dataValues.email}})
    .then(user => {
        return SourcesSelected.findOrCreate({where: {userId: user.id}, defaults: {userId: user.id}})
    })
    .then(arr => {
      res.json(arr);
    })
    .catch(next);
  });

  router.put('/polSelect', function (req, res, next) {
    
    Politics.find({where: {name: req.body.politics}})
    .then(source => {
      res.json(source.source);
    })
    .catch(next);
  });

  module.exports = router