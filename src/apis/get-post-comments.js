import instance from './axios-default'
const { IgApiClient } = require('instagram-private-api')
const { MediaCommentsFeed } = require('instagram-private-api')
const shttps = require('socks-proxy-agent')

let getPostComments = (async () => {
  /*
  const ig = new IgApiClient()
  ig.state.generateDevice('heciyej940')
  ig.request.defaults.agentClass = shttps
  ig.request.defaults.agentOptions = {
    hostname: 'zproxy.lum-superproxy.io',
    port: 22225,
    protocol: 'socks:',
    username: 'lum-customer-hl_263c7955-zone-residential',
    password: '91dyc7x5zeu0',
    header: 'x-lum-onboarding: ad35f7ae31947a1c'
  }
  await ig.simulate.preLoginFlow()

  //const auth = await ig.account.login('heciyej940', 'paulagratidaosorteador')

  process.nextTick(async () => await ig.simulate.postLoginFlow())
  const mediaComments = await ig.feed
    .mediaComments('COiO89WncDC')
    .items()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.log(error))
    */
})()

export default getPostComments

/*
heciyej940@cnxingye.com
heciyej940
paulagratidaosorteador
*/

//curl --proxy zproxy.lum-superproxy.io:22225 --proxy-user lum-customer-hl_263c7955-zone-residential:91dyc7x5zeu0 "http://lumtest.com/myip.json" -H "x-lum-onboarding: ad35f7ae31947a1c"