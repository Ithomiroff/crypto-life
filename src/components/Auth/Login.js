import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button, Input } from '../../styled/Global';
import { Controls, Fields, Form, FormTitle, Info } from './styled';
import { authStore } from '../../store/auth.store';

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