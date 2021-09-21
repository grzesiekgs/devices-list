import React, { FunctionComponent, useCallback } from 'react';
import { useToggle } from 'src/utils/hooks';
import { conditionClass, joinClasses } from 'src/utils/classNames';
import { Button, Checkbox, CheckboxOnChange } from 'src/components';
import { MultiSelectProps } from './MultiSelect.types';
import Styles from './multiSelect.module.scss';

const renderItem = (selected: string[], onChange: CheckboxOnChange) => (item: string) =>
  (
    <li key={item} className={Styles.multiSelect__item}>
      <Checkbox label={item} checked={selected.includes(item)} onChange={onChange} />
    </li>
  );

export const MultiSelect: FunctionComponent<MultiSelectProps> = ({ label, items, selected, onChange }) => {
  const [isOpen, toggleDropdown] = useToggle();
  const handleItemChange = useCallback<CheckboxOnChange>(
    (value, checked) => {
      let newSelected: string[];

      if (checked) {
        newSelected = [...selected, value];
      } else {
        newSelected = selected.filter((selectedValue) => selectedValue !== value);
      }

      onChange(newSelected);
    },
    [selected, onChange]
  );

  return (
    <div className={joinClasses(Styles.multiSelect, conditionClass(isOpen, Styles.multiSelect_open))}>
      <Button className={Styles.multiSelect__button} onClick={toggleDropdown}>
        {label} ▼
      </Button>
      <ul className={joinClasses(Styles.multiSelect__list, conditionClass(isOpen, Styles.multiSelect__list_open))}>
        {items.map(renderItem(selected, handleItemChange))}
      </ul>
    </div>
  );
};
