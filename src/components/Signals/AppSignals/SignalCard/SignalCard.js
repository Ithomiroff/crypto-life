import { DateTime } from 'luxon';

import { Card, Date, Description, Header, Image, Name, Title } from './styled';
import { ReactComponent as Logo } from '../../../../assets/icons/logo.svg';
import { ReactComponent as Clock } from '../../../../assets/icons/clock.svg';
import { VoiceWave } from '../../../VoiceWave/VoiceWave';

const SignalCard = ({ imageUrl, title, description, creationDate, voiceUrl, id }) => {
  const time = DateTime.fromISO(creationDate).toFormat('HH:mm');

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
      {voiceUrl && <VoiceWave voiceUrl={voiceUrl} />}
      {description && <Description dangerouslySetInnerHTML={{ __html: description }} />}
      <Date>
        <Clock />
        {time}
      </Date>
    </Card>
  );
};

export { SignalCard };
