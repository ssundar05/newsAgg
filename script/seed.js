/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Politics, Technology, Sports, Financial, Entertainment} = require('../server/db/models')

async function seed (){
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])


  const politics = await Promise.all([
    Politics.create({name: 'Breitbart', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.breitbart.com&size=35..60..100', source: 'sources=breitbart-news'}),
    Politics.create({name: 'Politico', imgUrl: 'https://icons.better-idea.org/icon?url=https://www.politico.com&size=35..60..100', source: 'sources=politico'}),
    Politics.create({name: 'The Hill', imgUrl: 'https://icons.better-idea.org/icon?url=http://thehill.com&size=35..60..100', source: 'sources=the-hill'}),
    Politics.create({name: 'La Nacion', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.lanacion.com.ar&size=35..60..100', source: 'sources=la-nacion'}),
  ])

  const technology = await Promise.all([
    Technology.create({name: 'TechCrunch', imgUrl: 'https://icons.better-idea.org/icon?url=https://techcrunch.com&size=35..60..100', source: 'sources=techcrunch'}),
    Technology.create({name: 'Wired', imgUrl: 'https://icons.better-idea.org/icon?url=https://www.wired.com&size=35..60..100', source: 'sources=wired'}),
    Technology.create({name: 'Hacker News', imgUrl: 'https://icons.better-idea.org/icon?url=https://news.ycombinator.com&size=35..60..100', source: 'sources=hacker-news'}),
    Technology.create({name: 'Recode', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.recode.net&size=35..60..100', source: 'sources=recode'}),
  ])

  const sports = await Promise.all([
    Sports.create({name: 'ESPN', imgUrl: 'https://icons.better-idea.org/icon?url=http://espn.go.com&size=35..60..100', source: 'sources=espn'}),
    Sports.create({name: 'Bleacher Report', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.bleacherreport.com&size=35..60..100', source: 'sources=bleacher-report'}),
    Sports.create({name: 'NFL News', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.nfl.com/news&size=35..60..100', source: 'sources=nfl-news'}),
    Sports.create({name: 'NHL News', imgUrl: 'https://icons.better-idea.org/icon?url=https://www.nhl.com/news&size=35..60..100', source: 'sources=nhl-news'}),
  ])

  const financial = await Promise.all([
    Financial.create({name: 'Bloomberg', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.bloomberg.com&size=35..60..100', source: 'sources=bloomberg'}),
    Financial.create({name: 'Financial Post', imgUrl: 'https://icons.better-idea.org/icon?url=http://business.financialpost.com&size=35..60..100', source: 'sources=financial-post'}),
    Financial.create({name: 'The Economist', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.economist.com&size=35..60..100', source: 'sources=the-economist'}),
    Financial.create({name: 'The Wall Street Journal', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.wsj.com&size=35..60..100', source: 'sources=the-wall-street-journal'}),
  ])

  const entertainment = await Promise.all([
    Entertainment.create({name: 'Buzzfeed', imgUrl: 'https://icons.better-idea.org/icon?url=https://www.buzzfeed.com&size=35..60..100', source: 'sources=buzzfeed'}),
    Entertainment.create({name: 'Daily Mail', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.dailymail.co.uk/home/index.html&size=35..60..100', source: 'sources=daily-mail'}),
    Entertainment.create({name: 'Mashable', imgUrl: 'https://icons.better-idea.org/icon?url=http://mashable.com&size=35..60..100', source: 'sources=mashable'}),
    Entertainment.create({name: 'The Lad Bible', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.theladbible.com&size=35..60..100', source: 'sources=the-lad-bible'}),
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${politics.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
