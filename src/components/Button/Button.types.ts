import { MouseEvent } from 'react';

export type ButtonOnClick = (event: MouseEvent<HTMLButtonElement>) => void;

export interface ButtonProps {
  className?: string;
  onClick?: ButtonOnClick;
}
