const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/politics', require('./politics'))
router.use('/sports', require('./sports'))
router.use('/financial', require('./financial'))
router.use('/technology', require('./technology'))
router.use('/entertainment', require('./entertainment'))
router.use('/selectedSources', require('./selectedSources'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
