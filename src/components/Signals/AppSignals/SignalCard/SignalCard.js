import { Card, Header, Title } from './styled';
import { ReactComponent as Logo } from '../../../../assets/icons/logo.svg';

const SignalCard = () => {
  return (
    <Card>
      <Header>
        <Logo />
        <Title>
          <span>CryptoLife</span>
          <span>крипто-сообщество</span>
        </Title>
      </Header>
    </Card>
  );
};

export { SignalCard };
