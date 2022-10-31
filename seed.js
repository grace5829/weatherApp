const { green, red } = require('chalk')
const { db, Forecast } = require('./server/db')

async function addCampusesStudents() {
 const forecast1 = {
      temp: 95,
      windSpeed: 0,
      weather:'sunny',
      weekday:'Monday',
      realFeel:110
    }
  const forecast2 = {
    temp: 75,
    windSpeed: 5,
    weather:'cloudy',
    weekday:'Tuesday',
    realFeel:72
  }
  const forecast3 = {
    temp: 60,
    windSpeed: 10,
    weather:'stormy',
    weekday:'Wednesday',
    realFeel:53
  }
  const forecast4 = {
    temp: 13,
    windSpeed: 30,
    weather:'snowy',
    weekday:'Thursday',
    realFeel:-5
  }


  await Forecast.create(forecast1)
  await Forecast.create(forecast2)
  await Forecast.create(forecast3)
  await Forecast.create(forecast4)

}

const seed = async () => {
  try {
    await db.sync({ force: true })
    await addCampusesStudents()
    // seed your database here!
  } catch (err) {
    console.log(red(err))
  }
}

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed()
    console.log(green('Seeding success!'))
  } catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
  } finally {
    db.close()
  }
}

if (require.main === module) {
  runSeed()
}
