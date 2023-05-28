import {
  getUserSelf,
  postLoginUser,
  postRegisterUser,
} from '../../services/axios/user-calls';
import { fetchCartStatistic } from './cart';

export const fetchUser = (userData, redirect) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_USER_LOADING',
    });
    try {
      const user = await getUserSelf();
      // Успешное завершение операции
      dispatch({
        type: 'SET_USER_SUCCESS',
        payload: user.data,
      });
      dispatch(fetchCartStatistic());
    } catch (error) {
      // Обработка ошибки
      dispatch({
        type: 'SET_USER_FAILURE',
        payload: error.message,
      });
    }
  };
};
export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_USER_LOADING',
    });
    try {
      dispatch({
        type: 'SET_USER_SUCCESS',
        payload: null,
      });
    } catch (error) {
      // Обработка ошибки
      dispatch({
        type: 'SET_USER_FAILURE',
        payload: error.message,
      });
    }
  };
};

// Асинхронная функция для регистрация пользователя
export const registerUser = (userData, redirect) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_USER_LOADING',
    });
    try {
      const { data } = await postRegisterUser(userData);
      localStorage.setItem('api_token', data.token);
      const user = await getUserSelf();

      // Успешное завершение операции
      dispatch({
        type: 'SET_USER_SUCCESS',
        payload: user.data,
      });
      redirect();
    } catch (error) {
      // Обработка ошибки
      dispatch({
        type: 'SET_USER_FAILURE',
        payload: error.message,
      });
    }
  };
};

// Асинхронная функция для получения пользователя
export const loginUser = (userData, redirect) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_USER_LOADING',
    });
    try {
      const { data } = await postLoginUser(userData);
      localStorage.setItem('api_token', data.token);
      const user = await getUserSelf();

      // Успешное завершение операции
      dispatch({
        type: 'SET_USER_SUCCESS',
        payload: user.data,
      });
      redirect();
    } catch (error) {
      // Обработка ошибки
      dispatch({
        type: 'SET_USER_FAILURE',
        payload: error.message,
      });
    }
  };
};
