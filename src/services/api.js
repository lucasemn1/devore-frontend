import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devore.herokuapp.com',
});

export default api;
