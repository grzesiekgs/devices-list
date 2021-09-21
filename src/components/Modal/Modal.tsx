import ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';
import elementIds from 'constants/elementsIds';
import { Button, Courtain } from 'src/components';
import { ModalProps } from './Modal.types';
import Styles from './modal.module.scss';

export const Modal: FunctionComponent<ModalProps> = ({ onClose, children }) => {
  const container = document.getElementById(elementIds.modalContainer);

  if (!container) {
    console.warn('Missing container for Modal!', elementIds.modalContainer);

    return null;
  }

  const modalElement = (
    <Courtain onClick={onClose}>
      <div className={Styles.modal}>
        <Button onClick={onClose} className={Styles.modal__close}>
          CLOSE
        </Button>
        <div className={Styles.modal__content}>{children}</div>
      </div>
    </Courtain>
  );

  return ReactDOM.createPortal(modalElement, container);
};
