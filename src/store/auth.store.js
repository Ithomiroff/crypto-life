import { makeAutoObservable } from 'mobx';

import { confirmUser, loginUser, registerUser, restorePasswordUser } from '../api/endpoints/auth';
import { profileStore } from './profile.store';

const store = makeAutoObservable({
  loading: false,
  confirmed: false,
  confirmLink: null,
  setConfirmLink(value) {
    store.confirmLink = value;
  },
  async loginUser(body) {
    try {
      store.loading = true;

      const { user } = await loginUser(body);
      profileStore.setUser(user);
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
      await confirmUser(url);
      store.confirmed = true;
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
});

export { store as authStore };
