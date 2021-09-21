import React, { FunctionComponent } from 'react';
import { CourtainProps } from './Courtain.types';
import Styles from './courtain.module.scss';

export const Courtain: FunctionComponent<CourtainProps> = ({ onClick, children }) => (
  <div className={Styles.courtain}>
    <div className={Styles.courtain__background} onClick={onClick} />
    {children}
  </div>
);
