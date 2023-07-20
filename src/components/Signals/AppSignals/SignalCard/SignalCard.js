import { useCallback, useEffect, useLayoutEffect } from 'react';

import { DateTime } from 'luxon';
import WaveSurfer from 'wavesurfer.js';

import { Card, Date, Description, Header, Image, Name, Title } from './styled';
import { ReactComponent as Logo } from '../../../../assets/icons/logo.svg';
import { ReactComponent as Clock } from '../../../../assets/icons/clock.svg';
import { useWavesurfer } from './useWavesurfer';

const SignalCard = ({ imageUrl, title, description, creationDate, voiceUrl, id }) => {
  const time = DateTime.fromISO(creationDate).toFormat('HH:mm');

  const { wavesurfer, setRef } = useWavesurfer();

  const initRef = useCallback(
    (ref) => {
      if (voiceUrl) {
        setRef(ref);
      }
    },
    [setRef, voiceUrl],
  );

  return (
    <Card>
      <Header>
        <Logo />
        <Title>
          <span>CryptoLife</span>
          <span>крипто-сообщество</span>
        </Title>
      </Header>
      {title && <Name>{title}</Name>}
      {imageUrl && <Image $url={imageUrl} />}
      <div ref={initRef} />
      {description && <Description dangerouslySetInnerHTML={{ __html: description }} />}
      <Date>
        <Clock />
        {time}
      </Date>
    </Card>
  );
};

export { SignalCard };
