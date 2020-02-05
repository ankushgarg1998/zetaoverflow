import axios from 'axios'
export default axios.create({
  // baseURL: 'http://172.16.76.222:8080',
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://zetaoverflow.herokuapp.com/',
  timeout: 5000,
  headers: {
    // 'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
    'Authorization': localStorage.getItem('authorization'),
    'Content-Type': 'application/json'
  }
})