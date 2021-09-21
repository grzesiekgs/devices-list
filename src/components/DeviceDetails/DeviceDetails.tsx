import React, { FunctionComponent } from 'react';
import { BatteryLevel, DeviceImagesList } from 'src/components';
import { DeviceDetailsProps } from './DeviceDetails.types';
import { connector } from './DeviceDetails.connector';
import Styles from './deviceDetails.module.scss';

export const DeviceDetails: FunctionComponent<DeviceDetailsProps> = ({
  deviceName,
  aisle,
  batteryLevel,
  batteryVoltage,
  otaVersion,
  configs,
  latestStatusAt,
  latestImages
}) => (
  <div className={Styles.deviceDetails}>
    <h3 className={Styles.deviceDetails__name}>{deviceName}</h3>
    <span className={Styles.deviceDetails__info}>
      Last status update: <b>{latestStatusAt}</b>
    </span>
    <span className={Styles.deviceDetails__info}>
      Aisle: <b>{aisle}</b>
    </span>
    <span className={Styles.deviceDetails__info}>
      OTA version: <b>{otaVersion}</b>
    </span>
    <span className={Styles.deviceDetails__info}>
      Brightness: <b>{configs.brightness}</b>
    </span>

    <span className={Styles.deviceDetails__info}>
      Image quality: <b>{configs.imageQuality}</b>
    </span>

    <span className={Styles.deviceDetails__info}>
      Image quality: <b>{configs.imageQuality}</b>
    </span>
    <span className={Styles.deviceDetails__info}>
      Battery voltage: <b>{batteryVoltage}</b>
    </span>
    <BatteryLevel batteryLevel={batteryLevel} />
    <DeviceImagesList images={latestImages} />
  </div>
);

export const DeviceDetailsConnected = connector(DeviceDetails);
