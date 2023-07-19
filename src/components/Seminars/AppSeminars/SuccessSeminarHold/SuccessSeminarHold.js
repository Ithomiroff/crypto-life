import { NavLink } from 'react-router-dom';

import { Root, Title } from './styled';
import { ReactComponent as CheckSvg } from '../../../../assets/icons/check.svg';
import { Button } from '../../../../styled/Global';

const SuccessSeminarHold = ({ onClose }) => {
  return (
    <Root>
      <CheckSvg />
      <Title>Запись прошла успешно</Title>
      <p>
        Вы успешно записались на семинар <br /> Ознакомиться со списком семинаров Вы <br /> можете в
        своем профиле
      </p>
      <NavLink
        to="/app/profile"
        onClick={onClose}
      >
        <Button $color="primary">Перейти в профиль</Button>
      </NavLink>
    </Root>
  );
};

export { SuccessSeminarHold };
