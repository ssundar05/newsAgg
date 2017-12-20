const router = require('express').Router()
// const {SourcesSelected} = require('../db/models')
const {User, SourcesSelected} = require('../db/models')


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

  module.exports = router