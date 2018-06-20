
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
    Politics.create({name: 'Breitbart', imgUrl: 'http://www.breitbart.com/t/assets/icons/apple-touch-icon-152x152.png', source: 'sources=breitbart-news'}),
    Politics.create({name: 'Politico', imgUrl: 'https://static.politico.com/dims4/default/bd69088/2147483647/legacy_thumbnail/144x144/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fcf%2F05%2Fee684a274496b04fa20ba2978da1%2Fpolitico.png', source: 'sources=politico'}),
    Politics.create({name: 'The Hill', imgUrl: 'https://icon-locator.herokuapp.com/lettericons/T-120-0250a5.png', source: 'sources=the-hill'}),
    Politics.create({name: 'La Nacion', imgUrl: 'https://www.lanacion.com.ar/apple-touch-icon.png', source: 'sources=la-nacion'}),
  ])

  const technology = await Promise.all([
    Technology.create({name: 'TechCrunch', imgUrl: 'https://icon-locator.herokuapp.com/icon?url=https://techcrunch.com&size=70..120..200', source: 'sources=techcrunch'}),
    Technology.create({name: 'Wired', imgUrl: 'https://www.wired.com/apple-touch-icon.png', source: 'sources=wired'}),
    Technology.create({name: 'Hacker News', imgUrl: 'https://icon-locator.herokuapp.com/lettericons/Y-120-ff6600.png', source: 'sources=hacker-news'}),
    Technology.create({name: 'Recode', imgUrl: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/6397047/recode_favicon-180.0.png', source: 'sources=recode'}),
  ])

  const sports = await Promise.all([
    Sports.create({name: 'ESPN', imgUrl: 'http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons-v2/espn-icon-120x120.png', source: 'sources=espn'}),
    Sports.create({name: 'Bleacher Report', imgUrl: 'http://www.bleacherreport.com/img/favicon/appleTouchIcon.png', source: 'sources=bleacher-report'}),
    Sports.create({name: 'NFL News', imgUrl: 'https://www.nfl.com/apple-touch-icon.png?akmobile=ios&akcarrier=other', source: 'sources=nfl-news'}),
    Sports.create({name: 'NHL News', imgUrl: 'https://www-league.nhlstatic.com/nhl.com/builds/site-core/4d0786eee584834bdb060edd309c00b34567885e_1529084610/images/iOS/apple-icon-144x144.png', source: 'sources=nhl-news'}),
  ])

  const financial = await Promise.all([
    Financial.create({name: 'Bloomberg', imgUrl: 'https://assets.bwbx.io/s3/javelin/public/hub/images/apple-touch-icon-120x120-ef3226f2bd.png', source: 'sources=bloomberg'}),
    Financial.create({name: 'Financial Post', imgUrl: 'http://1.gravatar.com/blavatar/b4ece3189893389a03f063830eacd95c?s=114', source: 'sources=financial-post'}),
    Financial.create({name: 'The Economist', imgUrl: 'http://www.economist.com/assets/apple-touch-icon.png', source: 'sources=the-economist'}),
    Financial.create({name: 'The Wall Street Journal', imgUrl: 'https://s.wsj.net/media/wsj_apple-touch-icon-120x120.png', source: 'sources=the-wall-street-journal'}),
  ])

  const entertainment = await Promise.all([
    Entertainment.create({name: 'Buzzfeed', imgUrl: 'https://www.buzzfeed.com/static-assets/img/touch-icon-ios_120.208a0e329cd6e8d831b21ae17fb6aabb.png', source: 'sources=buzzfeed'}),
    Entertainment.create({name: 'Daily Mail', imgUrl: 'http://www.dailymail.co.uk/apple-touch-icon.png', source: 'sources=daily-mail'}),
    Entertainment.create({name: 'Mashable', imgUrl: 'https://mashable.com/apple-touch-icon-120x120.png?v=m2Pmw8zNwl', source: 'sources=mashable'}),
    Entertainment.create({name: 'The Lad Bible', imgUrl: 'http://www.ladbible.com/assets/images/theme/favicons/apple-touch-icon-120x120.png', source: 'sources=the-lad-bible'}),
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
