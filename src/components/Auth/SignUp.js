import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button, Input } from '../../styled/Global';
import { Controls, Fields, Form, FormRoot, FormTitle, Info } from './styled';
import { authStore } from '../../store/auth.store';

const SignUp = observer(() => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordRepeat: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: (body) => authStore.signUpUser(body),
  });

  useEffect(() => {
    if (authStore.confirmLink) {
      navigate('/app/confirm');
    }
  }, [navigate, authStore.confirmLink]);

  return (
    <FormRoot>
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle>Регистрация</FormTitle>
        <Fields>
          <Input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Адрес электронной почты"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Input
            type="password"
            name="passwordRepeat"
            placeholder="Повторите пароль"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
          />
        </Fields>
        <Controls>
          <Info>
            Уже есть аккаунт? <NavLink to="/app/profile">Войти в аккаунт</NavLink>
          </Info>
          <Button
            type="submit"
            $color="primary"
          >
            Зарегистрироваться
          </Button>
        </Controls>
      </Form>
    </FormRoot>
  );
});

export { SignUp };
