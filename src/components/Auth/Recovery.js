import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button, Input } from '../../styled/Global';
import { Controls, Fields, Form, FormRoot, FormTitle, Info } from './styled';
import { authStore } from '../../store/auth.store';

const Recovery = observer(() => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (body) => {
      authStore.signUpUser(body);
    },
  });

  return (
    <FormRoot>
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle>Восстановление пароля</FormTitle>
        <Fields>
          <Input
            type="email"
            name="email"
            placeholder="Адрес электронной почты"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Fields>
        <Controls $centered>
          <Button
            type="submit"
            $color="primary"
          >
            Отправить
          </Button>
        </Controls>
      </Form>
    </FormRoot>
  );
});

export { Recovery };
