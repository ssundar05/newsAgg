const router = require('express').Router()
// const {SourcesSelected} = require('../db/models')
const {User, SourcesSelected, Politics, Sports, Technology, Entertainment, Financial} = require('../db/models')


router.put('/', function (req, res, next) {
   
    User.findOne({where: {email: req.user.dataValues.email}})
    .then(user => {

        return SourcesSelected.findOrCreate({where: {userId: user.id}, defaults: {userId: user.id}})
    })
    .then(arr => {
      
      // if(arr[0].politics !== 'Politics')
      // arr[0].politics = JSON.parse(arr[0].politics)
      // if(arr[1].sports !== 'Sports')
      // arr[0].sports = JSON.parse(arr[0].sports)
      res.json(arr);
    })
    .catch(next);
  });

  router.put('/polSelect', function (req, res, next) {
    let p1 = Politics.find({where: {name: req.body.politics}})
    
    let p2 = SourcesSelected.findOne({where: {userId: req.body.userId}})
    Promise.all([p1, p2]).then(values => {
     
      res.json(values[0])
      return values[1].update({politics: values[0]})
    })
    .catch(next)
  });

   router.put('/sportsSelect', function (req, res, next) {
      let p1 = Sports.find({where: {name: req.body.sports}})
      let p2 = SourcesSelected.findOne({where: {userId: req.body.userId}})
      Promise.all([p1, p2]).then(values => {
       
        res.json(values[0])
        return values[1].update({sports: values[0]})
      })
      .catch(next)
    });

    router.put('/financialSelect', function (req, res, next) {
      let p1 = Financial.find({where: {name: req.body.financial}})
      
      let p2 = SourcesSelected.findOne({where: {userId: req.body.userId}})
      Promise.all([p1, p2]).then(values => {
       
        res.json(values[0])
        return values[1].update({financial: values[0]})
      })
      .catch(next)
    });

    router.put('/entertainmentSelect', function (req, res, next) {
      let p1 = Entertainment.find({where: {name: req.body.entertainment}})
      
      let p2 = SourcesSelected.findOne({where: {userId: req.body.userId}})
      Promise.all([p1, p2]).then(values => {
       console.log('ENT', values[0])
        res.json(values[0])
        return values[1].update({entertainment: values[0]})
      })
      .catch(next)
    });

    router.put('/technologySelect', function (req, res, next) {
      let p1 = Technology.find({where: {name: req.body.technology}})
      
      let p2 = SourcesSelected.findOne({where: {userId: req.body.userId}})
      Promise.all([p1, p2]).then(values => {
        res.json(values[0])
        return values[1].update({technology: values[0]})
      })
      .catch(next)
    });
  module.exports = router