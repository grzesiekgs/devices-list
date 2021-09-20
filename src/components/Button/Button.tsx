import React, { FunctionComponent, MouseEvent } from 'react';
import { joinClasses } from 'src/utils/classNames';
import Styles from './button.module.scss';

export type ButtonOnClick = (event: MouseEvent<HTMLButtonElement>) => void;

export interface ButtonProps {
  className?: string;
  onClick?: ButtonOnClick;
}

export const Button: FunctionComponent<ButtonProps> = ({ className, onClick, children }) => (
  <button className={joinClasses(Styles.Button, className)} onClick={onClick}>
    {children}
  </button>
);
