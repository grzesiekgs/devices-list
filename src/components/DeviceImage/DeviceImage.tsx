import React, { FunctionComponent } from 'react';
import { joinClasses } from 'src/utils/classNames';
import { DeviceImageProps, DeviceImageSize } from './DeviceImage.types';
import Styles from './deviceImage.module.scss';

const imageSizeClassName = (size: DeviceImageSize) => Styles[`deviceImage_${size}`];

export const DeviceImage: FunctionComponent<DeviceImageProps> = ({
  imageUrl,
  detectedAt,
  size = 'small',
  className
}) => (
  <figure className={joinClasses(Styles.deviceImage, imageSizeClassName(size), className)}>
    {imageUrl ? <img src={imageUrl} className={Styles.deviceImage__image} /> : 'No image'}
    <figcaption className={Styles.deviceImage__caption}>{detectedAt}</figcaption>
  </figure>
);
