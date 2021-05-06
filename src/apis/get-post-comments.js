import instance from './axios-default'
const { IgApiClient } = require('instagram-private-api')
const { MediaCommentsFeed } = require('instagram-private-api')

let getPostComments = (async () => {
  const ig = new IgApiClient()
  ig.state.generateDevice('heciyej940')
  await ig.simulate.preLoginFlow()

  const loggedInUser = await ig.account.login(
    'heciyej940',
    'paulagratidaosorteador'
  )

  process.nextTick(async () => await ig.simulate.postLoginFlow())
  // Create UserFeed instance to get loggedInUser's posts
  const mediaComments = await ig.feed
    .mediaComments('COiO89WncDC')
    .items()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.log(error))
})()

export default getPostComments

/*
heciyej940@cnxingye.com
heciyej940
paulagratidaosorteador
*/
