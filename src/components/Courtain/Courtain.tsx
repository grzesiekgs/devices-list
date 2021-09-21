import React, { FunctionComponent } from 'react';
import { CourtainProps } from './Courtain.types';
import Styles from './courtain.module.scss';

export const Courtain: FunctionComponent<CourtainProps> = ({ onClick, children }) => (
  <div onClick={onClick} className={Styles.courtain}>
    {children}
  </div>
);
