import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { IDevice } from 'types/devices';
import { useResettableState } from 'src/utils/hooks';
import { DeviceDetailsConnected, DeviceTile, Modal } from 'src/components';
import { DevicesListProps } from './DevicesList.types';
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
  const [viewedDevice, setViewedDevice, handleCloseModal] = useResettableState<string, null>(null);

  return (
    <>
      <ul className={Styles.devicesList}>{devices.map(renderDevice(setViewedDevice))}</ul>
      {viewedDevice ? (
        <Modal title={`DEVICE ${viewedDevice}`} onClose={handleCloseModal}>
          <DeviceDetailsConnected deviceName={viewedDevice} />
        </Modal>
      ) : null}
    </>
  );
};
