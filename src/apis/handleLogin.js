import instance from './axios-default'

const verifyUserSession = () => {
  instance
    .post('users/verifyJWT')
    .then(response => {
      const userData = 'teste'
      return userData
    })
    .catch(error => {
      console.log(error)
    })
}

export default verifyUserSession
