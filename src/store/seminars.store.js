import { makeAutoObservable } from 'mobx';

import { profileStore } from './profile.store';
import { addUserToSeminar, getSeminarsList } from '../api/endpoints/seminars';

const store = makeAutoObservable({
  loading: false,
  holdingLoading: false,
  successHolding: false,
  seminars: [],
  async getAll() {
    try {
      store.loading = true;
      store.seminars = await getSeminarsList();
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
  async holdToSeminar(id) {
    try {
      store.holdingLoading = true;

      if (id) {
        await addUserToSeminar(id);
        store.successHolding = true;
      }
    } catch (err) {
    } finally {
      store.holdingLoading = false;
    }
  },
});

export { store as seminarsStore };
