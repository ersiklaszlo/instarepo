import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.baseURL || `https://instant-gramm.herokuapp.com/` || `http://localhost:8080/`
  })
}
