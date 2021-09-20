import React, { Dispatch, FunctionComponent, SetStateAction, useCallback, useState } from 'react';
import { IDevice } from 'types/devices';
import { DeviceDetailsConnected, DeviceTile, Modal } from 'src/components';
import { DevicesListProps } from './DevicesList.types';
import { connector } from './DevicesList.connector';
import Styles from './devicesList.module.scss';

const renderDevice =
  (setViewedDevice: Dispatch<SetStateAction<string | null>>) =>
  ({ deviceName, batteryLevel, aisle, latestImages }: IDevice) =>
    (
      <DeviceTile
        key={deviceName}
        deviceName={deviceName}
        batteryLevel={batteryLevel}
        aisle={aisle}
        latestImages={latestImages}
        onClick={setViewedDevice}
      />
    );

export const DevicesList: FunctionComponent<DevicesListProps> = ({ devices }) => {
  const [viewedDevice, setViewedDevice] = useState<string | null>(null);
  const handleCloseModal = useCallback(() => setViewedDevice(null), []);
  return (
    <>
      <ul className={Styles.devicesList}>{devices.map(renderDevice(setViewedDevice))}</ul>
      {viewedDevice ? (
        <Modal isOpen={true} onClose={handleCloseModal}>
          <DeviceDetailsConnected deviceName={viewedDevice} />
        </Modal>
      ) : null}
    </>
  );
};

export const DevicesListConnected = connector(DevicesList);
