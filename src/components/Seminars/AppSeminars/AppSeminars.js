import { useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { seminarsStore } from '../../../store/seminars.store';
import { List, Root } from './styled';
import { SeminarCard } from './SeminarCard/SeminarCard';
import { Container } from '../../../styled/Global';
import { Modal } from '../../Modal/Modal';
import { SuccessSeminarHold } from './SuccessSeminarHold/SuccessSeminarHold';

const AppSeminars = observer(() => {
  useEffect(() => {
    seminarsStore.getAll();
  }, []);

  const onHold = useCallback((id) => {
    seminarsStore.holdToSeminar(id);
  }, []);

  const handleClose = useCallback(() => {
    seminarsStore.successHolding = false;
  }, []);

  return (
    <>
      <Container>
        <Root>
          <List>
            {seminarsStore.seminars.map((item) => (
              <SeminarCard
                key={item.id}
                onHold={onHold}
                {...item}
              />
            ))}
          </List>
        </Root>
      </Container>
      {seminarsStore.successHolding && (
        <Modal>
          <SuccessSeminarHold onClose={handleClose} />
        </Modal>
      )}
    </>
  );
});

export { AppSeminars };
