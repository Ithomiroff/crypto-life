import { makeAutoObservable } from 'mobx';

import { getProfile } from '../api/endpoints/profile';

const store = makeAutoObservable({
  loading: true,
  user: null,
  async fetchProfile() {
    try {
      store.loading = true;

      store.user = await getProfile();
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
  setUser(value) {
    store.user = value;
  },
});

export { store as profileStore };
