import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { signalsStore } from '../../../store/signals.store';
import { Container } from '../../../styled/Global';
import { Root } from './styled';
import { SignalCard } from './SignalCard/SignalCard';

const AppSignals = observer(() => {
  useEffect(() => {
    signalsStore.getAll();
  }, []);

  return (
    <Container>
      <Root>
        {signalsStore.signals.map((signal) => (
          <SignalCard
            {...signal}
            key={signal.id}
          />
        ))}
      </Root>
    </Container>
  );
});

export { AppSignals };
