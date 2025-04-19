import axios from 'axios';
const LOCALHOST='http://localhost:8080'
const PRODUCTION = process.env.REACT_APP_API_BASE_URL;
export const API_BASE_URL = window.location.hostname === 'localhost' ? LOCALHOST : PRODUCTION;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
