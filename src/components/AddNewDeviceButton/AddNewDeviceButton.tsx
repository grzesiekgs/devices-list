import React, { FunctionComponent, useState } from 'react';
import { useToggle } from 'src/utils/hooks';
import { Button, Input, Modal } from 'src/components';
import { connector } from './AddNewDeviceButton.connector';
import { AddNewDeviceButtonProps } from './AddNewDeviceButton.types';

export const AddNewDeviceButton: FunctionComponent<AddNewDeviceButtonProps> = ({ createDevice }) => {
  const [isModalOpen, showModal, hideModal] = useToggle();
  const [deviceName, setDeviceName] = useState('');
  const handleCreateDevice = () => {
    createDevice({
      deviceName: 'test',
      aisle: 'asdsd'
    });
  };

  return (
    <>
      <Button onClick={showModal}>+</Button>
      {isModalOpen ? (
        <Modal onClose={hideModal}>
          <Input value={deviceName} onChange={setDeviceName} />
          <Button onClick={handleCreateDevice}>CREATE</Button>
        </Modal>
      ) : null}
    </>
  );
};

export const AddNewDeviceButtonConnected = connector(AddNewDeviceButton);
