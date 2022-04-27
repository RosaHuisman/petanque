import axios from 'axios';
const api = axios.create({
  //baseURL: 'http://localhost:3001/',
  baseURL: 'https://petanqueback.herokuapp.com/',
  timeout: 2500,
});

export default api;
