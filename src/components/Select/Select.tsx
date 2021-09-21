import React, { FunctionComponent, useCallback } from 'react';
import { useToggle } from 'src/utils/hooks';
import { conditionClass, joinClasses } from 'src/utils/classNames';
import { Button } from 'src/components';
import { SelectOnChange, SelectProps } from './Select.types';
import Styles from './select.module.scss';

const renderItem = (activeItem: string, onClick: SelectOnChange) => (item: string) =>
  (
    <li
      key={item}
      className={joinClasses(Styles.select__item, conditionClass(activeItem === item, Styles.select__item_active))}
      onClick={() => onClick(item)}
    >
      {item}
    </li>
  );

export const Select: FunctionComponent<SelectProps> = ({ value, items, className, onChange }) => {
  const [isOpen, toggleDropdown, _, hideDropdown] = useToggle();
  const handleClick = useCallback(
    (value: string) => {
      hideDropdown();
      onChange(value);
    },
    [hideDropdown, onChange]
  );

  return (
    <div className={joinClasses(Styles.select, className)}>
      <Button className={Styles.select__button} onClick={toggleDropdown}>
        {value} ▼
      </Button>
      <ul className={joinClasses(Styles.select__list, conditionClass(isOpen, Styles.select__list_open))}>
        {items.map(renderItem(value, handleClick))}
      </ul>
    </div>
  );
};
