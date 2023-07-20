import { makeAutoObservable } from 'mobx';

import { profileStore } from './profile.store';
import { addUserToSeminar, getSeminarsList } from '../api/endpoints/seminars';
import { getSignalsList } from '../api/endpoints/signals';

const store = makeAutoObservable({
  loading: false,
  signals: [],
  activeWv: null,
  async getAll() {
    try {
      store.loading = true;
      store.signals = await getSignalsList();
    } catch (err) {
    } finally {
      store.loading = false;
    }
  },
  setActiveWv(value) {
    store.activeWv.stop();
    store.activeWv = value;
  },
  destroy() {
    store.signals = [];
    store.activeWv?.destroy();
    store.activeWv = null;
  },
});

export { store as signalsStore };
