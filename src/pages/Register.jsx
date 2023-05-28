import { useState } from 'react';
import { Button, Field } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/user';
import { useHistory } from 'react-router-dom';
const INIT_STATE = {
  username: '',
  password: '',
  full_name: '',
  phone_number: '',
};

const Register = () => {
  const [values, setValues] = useState(INIT_STATE);
  const [formErrors, setFormErrors] = useState({});
  const { loading } = useSelector(({ user }) => user);
  const { username, password, full_name, phone_number } = values;
  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = () => history.push('/');

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

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
    if (!full_name) {
      errors.full_name = 'Поле "Полное имя" обязательно!';
    }
    if (!phone_number) {
      errors.phone_number = 'Поле "Номер телефона" обязательно!';
    }

    try {
      // Если есть ошибки, обновляем состояние с ошибками
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        dispatch(registerUser(values, redirect));
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
          <h1 className="form__title">Регистрация</h1>
          <Field
            value={username}
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Логин"
            error={formErrors?.username}
          />
          <Field
            value={full_name}
            name="full_name"
            onChange={handleChange}
            type="text"
            placeholder="Полное имя"
            error={formErrors?.full_name}
          />
          <Field
            value={phone_number}
            name="phone_number"
            onChange={handleChange}
            type="tel"
            placeholder="Номер телефона"
            error={formErrors?.phone_number}
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
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Register;
