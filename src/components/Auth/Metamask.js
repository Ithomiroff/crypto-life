import { MetaRoot } from './styled';
import { ReactComponent as MetamaskLogo } from '../../assets/icons/metamask.svg';
import { Button } from '../../styled/Global';

const Metamask = () => {
  return (
    <MetaRoot>
      <MetamaskLogo />
      <section>
        <h2>Добро пожаловать</h2>
        <p>
          Пожалуйста, авторизуйтесь через Ваш криптовалютный <br /> кошелек Metamask
        </p>
      </section>
      <Button $color="accent">Авторизоваться</Button>
    </MetaRoot>
  );
};

export { Metamask };
