import { useEffect } from 'react';

import { Inner, Overlay } from './styled';
import { Portal } from '../Portal/Portal';

const Modal = ({ children }) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <Portal parent={document.body}>
      <Overlay>
        <Inner>{children}</Inner>
      </Overlay>
    </Portal>
  );
};

export { Modal };
