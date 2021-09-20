import React, { FunctionComponent } from 'react';
import { joinClasses } from 'src/utils/classNames';
import { ButtonProps } from './Button.types';
import Styles from './button.module.scss';

export const Button: FunctionComponent<ButtonProps> = ({ className, onClick, children }) => (
  <button className={joinClasses(Styles.Button, className)} onClick={onClick}>
    {children}
  </button>
);
