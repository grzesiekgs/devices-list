import React, { FunctionComponent } from 'react';
import { joinClasses } from 'src/utils/classNames';
import { BatteryLevelProps, BatteryLevels } from './BatteryLevel.types';
import Styles from './batteryLevel.module.scss';

const getBatteryLevel = (powerLevel: number): BatteryLevels => {
  if (powerLevel <= 20) {
    return 'low';
  }

  if (powerLevel <= 60) {
    return 'medium';
  }

  return 'high';
};

const batteryColorClassName = (batteryLevel: BatteryLevels) => Styles[`batteryLevel_${batteryLevel}`];

export const BatteryLevel: FunctionComponent<BatteryLevelProps> = ({ batteryLevel, className }) => {
  const powerLevel = parseInt(String(batteryLevel * 100));

  return (
    <div className={joinClasses(Styles.batteryLevel, batteryColorClassName(getBatteryLevel(powerLevel)), className)}>
      {powerLevel}%
    </div>
  );
};
