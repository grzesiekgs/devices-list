import React, { FunctionComponent, useState } from 'react';
import { useToggle } from 'src/utils/hooks';
import { Button, Input, Modal, Select } from 'src/components';
import { connector } from './AddNewDevice.connector';
import { AddNewDeviceProps } from './AddNewDevice.types';
import Styles from './addNewDevice.module.scss';

export const AddNewDevice: FunctionComponent<AddNewDeviceProps> = ({ aisles, createDevice }) => {
  const [isModalOpen, _, showModal, hideModal] = useToggle();
  const [deviceName, setDeviceName] = useState('');
  const [aisle, setAisle] = useState(aisles[0] ?? '');

  const handleCreateDevice = () => {
    createDevice({
      deviceName,
      aisle
    });
    hideModal();
  };

  return (
    <>
      <Button className={Styles.addNewDevice} onClick={showModal}>
        Add new device
      </Button>
      {isModalOpen ? (
        <Modal title={'Add new device'} className={Styles.addNewDevice__modal} onClose={hideModal}>
          <Input
            value={deviceName}
            placeholder={'Device name'}
            className={Styles.addNewDevice__field}
            onChange={setDeviceName}
          />
          <Select value={aisle} items={aisles} className={Styles.addNewDevice__field} onChange={setAisle} />
          <Button className={Styles.addNewDevice__button} onClick={handleCreateDevice}>
            CREATE
          </Button>
        </Modal>
      ) : null}
    </>
  );
};

export const AddNewDeviceConnected = connector(AddNewDevice);
