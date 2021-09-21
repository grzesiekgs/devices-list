import React, { FunctionComponent } from 'react';
import { IDeviceImage } from 'types/devices';
import { DeviceImage } from 'src/components';
import { DeviceImagesListProps } from './DeviceImagesList.types';
import Styles from './deviceImagesList.module.scss';

const renderDeviceImage = (image: IDeviceImage) => (
  <DeviceImage key={image.imageUrl} {...image} size={'medium'} className={Styles.deviceImagesList__image} />
);

export const DeviceImagesList: FunctionComponent<DeviceImagesListProps> = ({ images }) => (
  <ul className={Styles.deviceImagesList}>{images.length ? images.map(renderDeviceImage) : 'No Images'}</ul>
);
