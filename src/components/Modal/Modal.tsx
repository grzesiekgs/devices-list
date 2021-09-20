import ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';
import elementIds from 'constants/elementsIds';
import { Button } from 'src/components';
import { ModalProps } from './Modal.types';
import Styles from './modal.module.scss';

export const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const container = document.getElementById(elementIds.modalContainer);

  if (!container) {
    console.warn('Missing container for Modal!', elementIds.modalContainer);

    return null;
  }

  const modalElement = (
    <div className={Styles.modal}>
      <Button onClick={onClose}>CLOSE</Button>
      {children}
    </div>
  );

  return ReactDOM.createPortal(modalElement, container);
};
