import { useCallback, useEffect, useState } from 'react';

import WaveSurfer from 'wavesurfer.js';

const useWavesurfer = (options) => {
  const [wv, setWv] = useState(null);

  useEffect(() => {
    return () => {
      wv && wv.destroy();
    };
  }, [wv]);

  const create = useCallback(
    (container) => {
      const wave = WaveSurfer.create({
        ...options,
        progressColor: 'rgb(106, 27, 154)',
        waveColor: 'rgba(212, 222, 230)',
        barWidth: 3,
        barRadius: 1,
        barGap: 2,
        height: 45,
        url: 'https://download.samplelib.com/wav/sample-15s.wav',
        container,
      });
      setWv(wave);
    },
    [options],
  );

  return {
    create,
    wv,
  };
};

export { useWavesurfer };
