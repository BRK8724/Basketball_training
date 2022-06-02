/*eslint-disable */
import axios from 'axios';
import { auth } from './config';
import history from '../history';


const login = async ({ email, password }) => {
  return await axios
    .post(auth.login, { email, password })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        history.push("/home");
        location.reload();
      }
    })
    .catch((err) => {
      console.warn(err.response);
    });
};

const register = async ({ email, password, lastname, firstname, age, phone }) => {
  return await axios
    .post(auth.register, { email, password, lastname, firstname, age, phone })
    .then((response) => {
      if (response.status === 201) {
        history.push("/login");
        location.reload();
      }
    })
    .catch((err) => {
      console.warn(err.response);
    });
};

export default {
  login,
  register
};