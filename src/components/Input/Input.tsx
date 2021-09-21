import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import { joinClasses } from 'src/utils/classNames';
import { InputProps } from './Input.types';
import Styles from './input.module.scss';

export const Input: FunctionComponent<InputProps> = ({ value, placeholder, className, onChange }) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value), [onChange]);

  return (
    <input
      type={'text'}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={joinClasses(Styles.input, className)}
    />
  );
};
