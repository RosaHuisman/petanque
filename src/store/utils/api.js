import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 2500,
});

export default api;
