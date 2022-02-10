import axios from 'axios';

export default axios.create({
  baseURL: 'https://breakingbadapi.com/api/',
  responseType: 'json',
  withCredentials: false,
});
