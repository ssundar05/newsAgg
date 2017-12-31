const router = require('express').Router()
// const {SourcesSelected} = require('../db/models')
const {User, SourcesSelected, Politics} = require('../db/models')


router.put('/', function (req, res, next) {
    User.find({where: {email: req.user.dataValues.email}})
    .then(user => {
        return SourcesSelected.findOrCreate({where: {userId: user.id}, defaults: {userId: user.id}})
    })
    .then(arr => {
      if(arr[0].politics !== '')
      arr[0].politics = JSON.parse(arr[0].politics)
      if(arr[0].sports !== '')
      arr[0].sports = JSON.parse(arr[0].sports)
      res.json(arr);
    })
    .catch(next);
  });

  router.put('/polSelect', function (req, res, next) {
    let p1 = Politics.find({where: {name: req.body.politics}})
    console.log(req.body)
    let p2 = SourcesSelected.findOne({where: {userId: req.body.userId}})
    Promise.all([p1, p2]).then(values => {
     
      res.json(values[0])
      return values[1].update({politics: values[0]})
    })
    .catch(next)
    // Politics.find({where: {name: req.body.politics}})
    // .then(source => {
    //   return SourcesSelected.update({where: {userId: req.body.userId}
    //   })})
    //   .then(userSources => {
    //     console.log(source)
    //     return source.update({politics: source})
    //   })
    //     .then(source => {
    //       res.json(source.politics)
    //     })
    // .catch(next);
  });

  module.exports = router