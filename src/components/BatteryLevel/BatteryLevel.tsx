import React, { FunctionComponent } from 'react';
import { joinClasses } from 'src/utils/classNames';
import { BatteryLevelProps } from './BatteryLevel.types';
import Styles from './batteryLevel.module.scss';

export const BatteryLevel: FunctionComponent<BatteryLevelProps> = ({ batteryLevel, className }) => (
  <div className={joinClasses(Styles.batteryLevel, className)}>{batteryLevel * 100}%</div>
);
