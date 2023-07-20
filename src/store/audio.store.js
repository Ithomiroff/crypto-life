import { makeAutoObservable } from 'mobx';

import { profileStore } from './profile.store';
import { addUserToSeminar, getSeminarsList } from '../api/endpoints/seminars';
import { getSignalsList } from '../api/endpoints/signals';

const store = makeAutoObservable({
  playingVoiceId: null,
  wvInstance: null,
  setWv(value) {
    store.activeWv?.stop();
    store.activeWv = value;
  },
  playAudio(vw, id) {
    if (vw === store.wvInstance) {
      store.wvInstance.play();
    } else {
      store.wvInstance?.stop();

      store.playingVoiceId = id;
      store.wvInstance = vw;
      store.wvInstance.play();
    }

    store.playingVoiceId = id;
  },
  pauseAudio() {
    store.playingVoiceId = null;
    store.wvInstance?.pause();
  },
  destroy() {
    store.playingVoiceId = null;

    store.activeWv?.destroy();
    store.activeWv = null;
  },
});

export { store as audioStore };
