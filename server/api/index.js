const express = require('express')
const router = express.Router()


//update route names
router.use('/forecasts', require('./forecasts'))

// router.use('/users', require('./users'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})



module.exports = router
