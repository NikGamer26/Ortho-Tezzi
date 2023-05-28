import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const AuthApiToken = () => {
  return { Authorization: `Token ${localStorage.getItem('api_token')}` };
};
