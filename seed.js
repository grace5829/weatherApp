const { green, red } = require('chalk')
const { db, Forecast } = require('./server/db')

async function addCampusesStudents() {
  const forecast1 = {
    temp: 95,
    windSpeed: 0,
    weather: 'Sunny',
    weekday: 'Monday',
    realFeel: 110,
    activity1: 'Spend the day at the pool',
    activity2: 'Make a sundae',
    activity3: 'Stay indoors with the AC on blast',
    historyName: 'Lorem ipsum',
    historyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    historyImageUrl: 'https://media.istockphoto.com/vectors/open-book-with-history-doodles-and-lettering-vector-id1092170968?k=20&m=1092170968&s=612x612&w=0&h=xuN5I9AhwUps398V6UqE1HL84Dcb4AheOPu9NeKJcrE='

  }
  const forecast2 = {
    temp: 75,
    windSpeed: 5,
    weather: 'Cloudy',
    weekday: 'Tuesday',
    realFeel: 72,
    activity1: 'Have a picnic',
    activity2: 'Go on a hike',
    activity3: 'Go kayaking',
    historyName: 'Lorem ipsum',
    historyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    historyImageUrl: 'https://media.istockphoto.com/vectors/open-book-with-history-doodles-and-lettering-vector-id1092170968?k=20&m=1092170968&s=612x612&w=0&h=xuN5I9AhwUps398V6UqE1HL84Dcb4AheOPu9NeKJcrE='

  }
  const forecast3 = {
    temp: 60,
    windSpeed: 10,
    weather: 'Stormy',
    weekday: 'Wednesday',
    realFeel: 53,
    activity1: 'Make a pillow fort',
    activity2: 'Play board games',
    activity3: 'Bake something delicious',
    historyName: 'Lorem ipsum',
    historyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    historyImageUrl: 'https://media.istockphoto.com/vectors/open-book-with-history-doodles-and-lettering-vector-id1092170968?k=20&m=1092170968&s=612x612&w=0&h=xuN5I9AhwUps398V6UqE1HL84Dcb4AheOPu9NeKJcrE='

  }
  const forecast4 = {
    temp: 13,
    windSpeed: 30,
    weather: 'Snowy',
    weekday: 'Thursday',
    realFeel: -5,
    activity1: 'Build a Snowman',
    activity2: 'Go sledding',
    activity3: 'Make hot chocolate',
    historyName: 'Lorem ipsum',
    historyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    historyImageUrl: 'https://media.istockphoto.com/vectors/open-book-with-history-doodles-and-lettering-vector-id1092170968?k=20&m=1092170968&s=612x612&w=0&h=xuN5I9AhwUps398V6UqE1HL84Dcb4AheOPu9NeKJcrE='

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
