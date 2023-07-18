import { makeAutoObservable } from 'mobx';

import { confirmUser, loginUser, registerUser, restorePasswordUser } from '../api/endpoints/auth';

const store = makeAutoObservable({
  loading: false,
  confirmLink: null,
  setConfirmLink(value) {
    store.confirmLink = value;
  },
  async loginUser(body) {
    try {
      store.loading = true;

      const user = await loginUser(body);
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
  async signUpUser(body) {
    try {
      store.loading = true;

      const { confirmLink } = await registerUser(body);
      store.setConfirmLink(confirmLink);
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
  async recoveryPassword(body) {
    try {
      store.loading = true;

      const user = await restorePasswordUser(body);
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
  async confirmAccount(url) {
    try {
      store.loading = true;
      confirmUser(url);
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
});

export { store as authStore };
