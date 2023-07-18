import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button, Input } from '../../styled/Global';
import { Controls, Fields, Form, FormRoot, FormTitle } from './styled';
import { authStore } from '../../store/auth.store';
import { profileStore } from '../../store/profile.store';

const Confirm = observer(() => {
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: ({ code }) => {
      const url = `${authStore.confirmLink}${code}`;
      authStore.confirmAccount(url);
    },
  });

  useEffect(() => {
    return () => {
      authStore.setConfirmLink(null);
    };
  }, []);

  if (!authStore.confirmLink || authStore.confirmed) {
    return (
      <Navigate
        to="/app/profile"
        replace
      />
    );
  }

  return (
    <FormRoot>
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle>Подтверждение аккаунта</FormTitle>
        <Fields>
          <Input
            type="number"
            name="code"
            placeholder="Код из письма"
            value={formik.values.code}
            onChange={formik.handleChange}
          />
        </Fields>
        <Controls $centered>
          <Button
            type="submit"
            $color="primary"
          >
            Подтвердить
          </Button>
        </Controls>
      </Form>
    </FormRoot>
  );
});

export { Confirm };
