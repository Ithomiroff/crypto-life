import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button, Input } from '../../styled/Global';
import { Controls, Fields, Form, FormTitle, Info } from './styled';
import { authStore } from '../../store/auth.store';
import { profileStore } from '../../store/profile.store';

const Login = observer(() => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (body) => {
      authStore.loginUser(body);
    },
  });

  if (profileStore.user) {
    console.log(profileStore.user?.role);
    return (
      <NavLink
        to={profileStore.user?.role === 'admin' ? '/admin/news' : '/app/profile'}
        replace
      />
    );
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormTitle>Вход</FormTitle>
      <Fields>
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
      </Fields>
      <Controls>
        <Info>
          Нет аккаунта? <NavLink to="/app/sign-up">Зарегистроваться</NavLink>
        </Info>
        <Button
          type="submit"
          $color="primary"
          $full
        >
          Войти
        </Button>
      </Controls>
    </Form>
  );
});

export { Login };
