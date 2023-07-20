import { DateTime } from 'luxon';

import {
  Banner,
  BottomBlock,
  Card,
  ClockSvg,
  Content,
  Description,
  Detail,
  DetailItem,
  Param,
  Params,
} from './styled';
import { ReactComponent as Calendar } from '../../../../assets/icons/calendar.svg';
import { ReactComponent as Clock } from '../../../../assets/icons/clock.svg';
import { ReactComponent as Users } from '../../../../assets/icons/users.svg';
import { Button } from '../../../../styled/Global';

const SeminarCard = ({ imageUrl, title, seats, date, description, id, onHold }) => {
  const formatDate = DateTime.fromISO(date, { locale: 'ru' });

  return (
    <Card>
      <Banner $url={imageUrl} />
      <Content>
        <h2>{title}</h2>
        <Params>
          <Param>
            <Calendar />
            <span>{formatDate.toFormat('d LLL yyyy')}</span>
          </Param>
          <Param>
            <ClockSvg>
              <Clock />
            </ClockSvg>
            <span>{formatDate.toFormat('HH:mm')}</span>
          </Param>
          <Param>
            <Users />
            <span>{seats}</span>
          </Param>
        </Params>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <BottomBlock>
          <Detail>
            <DetailItem>
              <span>Стоимость</span>
              <span>Бесплатно</span>
            </DetailItem>
            <DetailItem>
              <span>Свободных мест</span>
              <span>24</span>
            </DetailItem>
          </Detail>
          <Button
            $color="primary"
            $full
            onClick={() => onHold(id)}
          >
            Записаться на семинар
          </Button>
        </BottomBlock>
      </Content>
    </Card>
  );
};

export { SeminarCard };
