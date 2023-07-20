import { useCallback, useEffect, useState } from 'react';

import WaveSurfer from 'wavesurfer.js';

const useWavesurfer = (options) => {
  const [wavesurfer, setWavesurfer] = useState(null);

  useEffect(() => {
    return () => {
      wavesurfer && wavesurfer.destroy();
    };
  }, [wavesurfer]);

  const setRef = useCallback(
    (container) => {
      const ws = WaveSurfer.create({
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

      setWavesurfer(ws);
    },
    [options],
  );

  return {
    wavesurfer,
    setRef,
  };
};

export { useWavesurfer };
