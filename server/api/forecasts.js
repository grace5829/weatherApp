const { Forecast } = require('../db');

// apiRoutes/puppies.js
const router = require('express').Router();

// matches GET requests to /api/forecasts/
router.get('/', async function (req, res, next) { 
    try {
        const forecasts = await Forecast.findAll()
        res.send(forecasts)
    } catch (error) {
        res.status(500).send(`Something went wrong: ${error}`)
    }
});

router.get('/:forecastId', async function (req, res, next) { 
    try {
        const {forecastId}=req.params
        const forecast = await Forecast.findOne({
            where:{
                id:forecastId
            }
        })
        if (forecast !== null) {
            res.send(forecast)
        } else { res.status(202).send('Not Found!') }    
        } catch (error) {
        res.status(500).send(`Something went wrong: ${error}`)
    }
});

module.exports = router;