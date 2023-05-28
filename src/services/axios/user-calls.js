import { Axios, AuthApiToken } from './axios-config';

export const postRegisterUser = (userData) => Axios.post('/user/', userData);

export const getUserSelf = () =>
  Axios.get('/user/self/', { headers: AuthApiToken() });

export const postLoginUser = ({ username, password }) =>
  Axios.post('/user/token-auth/', {
    username,
    password,
  });
