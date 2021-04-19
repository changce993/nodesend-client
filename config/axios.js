import axios from 'axios';
const baseURL = 'http://localhost:4000';

const clientAxios = axios.create({
  baseURL
});

export default clientAxios;
