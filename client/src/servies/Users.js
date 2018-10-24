import Api from '@/servies/Api'

export default {
  index () {
    return Api().get('userList')
  },
  showUserById (userId) {
    return Api().get(`userList/${userId}`)
  },
  post (user) {
    return Api().post(`userList/${user}`, user)
  },
  displayAllUploadedImage () {
    return Api().get('main')
  },
  userUploadImage (userId) {
    return Api().post(`userList/${userId}`)
  }
}
