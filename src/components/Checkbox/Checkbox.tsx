import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import { CheckboxProps } from './Checkbox.types';
import Styles from './checkbox.module.scss';

export const Checkbox: FunctionComponent<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;

      onChange(value, checked);
    },
    [onChange]
  );

  return (
    <label className={Styles.checkbox}>
      <input
        type={'checkbox'}
        value={label}
        checked={checked}
        className={Styles.checkbox__input}
        onChange={handleChange}
      />
      <span className={Styles.checkbox__label}>{label}</span>
    </label>
  );
};
