import React, { FunctionComponent } from 'react';
import { joinClasses } from 'src/utils/classNames';
import { DeviceImageProps, DeviceImageSize } from './DeviceImage.types';
import Styles from './deviceImage.module.scss';

const imageSizeClassName = (size: DeviceImageSize) => Styles[`deviceImage__image_${size}`];

export const DeviceImage: FunctionComponent<DeviceImageProps> = ({
  imageUrl,
  detectedAt,
  size = 'small',
  className
}) => (
  <figure className={joinClasses(Styles.deviceImage, className)}>
    <img src={imageUrl} className={joinClasses(Styles.deviceImage__image, imageSizeClassName(size))} />
    <figcaption>{detectedAt}</figcaption>
  </figure>
);
