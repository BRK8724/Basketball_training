/*eslint-disable */
import axios from 'axios';
import { video } from './config';

class VideoService {
  getList = params =>
    new Promise((resolve, reject) => {
      axios
        .get(video.get, { params: params, headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`} })
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    });
}

const instance = new VideoService();
export default instance;