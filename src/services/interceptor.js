import axios from 'axios';
import history from 'src/config/history';
let whitelist = ['auth/login', 'auth/register'];

axios.interceptors.request.use(config => {
    console.log("hih1i")
  if (whitelist.find(e => config.url.includes(e))) return config;
  console.log("hihi")
  if (localStorage.getItem('user')) {
    let token = JSON.parse(localStorage.getItem('user')).accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  } else {
    history.push("/login")
  }
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    console.log("err", err);
    // if (err.response.status === 403 || err.response.status === 401) {
    // }
    return Promise.reject(err);
  }
);

// axios.interceptors.request.use(function (config) {
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });