import { useState } from 'react';
import { Button, Field } from '../components';
import { loginUser } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const INIT_STATE = {
  username: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(INIT_STATE);
  const [formErrors, setFormErrors] = useState({});
  const { loading } = useSelector(({ user }) => user);
  const { username, password } = values;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const redirect = () => history.push('/');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    // Проверка на пустоту полей
    if (!username) {
      errors.username = 'Поле "Логин" обязательно!';
    }
    if (!password) {
      errors.password = 'Поле "Пароль" обязательно!';
    }
    try {
      // Если есть ошибки, обновляем состояние с ошибками
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        dispatch(loginUser(values, redirect));
      }
    } catch (error) {
    } finally {
      clearState();
    }
  };
  const clearState = () => {
    setValues(INIT_STATE);
  };
  return (
    <main className="register">
      <div className="container">
        <form onSubmit={handleSubmit} className="form register__form">
          <h1 className="form__title">Авторизация</h1>
          <Field
            value={username}
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Логин"
            error={formErrors?.username}
          />
          <Field
            value={password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Пароль"
            error={formErrors?.password}
          />
          <Button disabled={loading} variant="big" type="submit">
            Войти
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
