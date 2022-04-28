import axios from 'axios';
const api = axios.create({
  //url: 'http://localhost:3001/',
  url: 'https://petanqueback.herokuapp.com/',
  timeout: 2500,
});

export default api;
