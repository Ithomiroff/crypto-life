import { useCallback, useRef } from 'react';

import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';

import { Line, Root, SoundBtn } from './styled';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { useWavesurfer } from './useWavesurfer';
import { audioStore } from '../../store/audio.store';

const VoiceWave = observer(({ voiceUrl }) => {
  const { wv, create } = useWavesurfer();

  const id = useRef(nanoid());

  const initRef = useCallback(
    (ref) => {
      if (voiceUrl && ref) {
        create(ref);
      }
    },
    [create, voiceUrl],
  );

  const handlePlay = () => {
    if (audioStore.playingVoiceId === id.current) {
      audioStore.pauseAudio();
    } else {
      audioStore.playAudio(wv, id.current);
    }
  };

  return (
    <Root>
      <SoundBtn onClick={handlePlay}>
        {audioStore.playingVoiceId === id.current ? <Pause /> : <Play />}
      </SoundBtn>
      <Line ref={initRef} />
    </Root>
  );
});

export { VoiceWave };
