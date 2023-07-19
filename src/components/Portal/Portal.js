import ReactDOM from 'react-dom';

const Portal = ({ children, parent }) => {
  if (parent == null) {
    return null;
  }

  return ReactDOM.createPortal(children, parent);
};

export { Portal };
