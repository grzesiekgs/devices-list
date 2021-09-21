import React, { FunctionComponent, useCallback, useState } from 'react';
import { conditionClass, joinClasses } from 'src/utils/classNames';
import { Checkbox, CheckboxOnChange } from 'src/components';
import { MultiSelectProps } from './MultiSelect.types';
import Styles from './multiSelect.module.scss';

const renderItem = (selected: string[], onChange: CheckboxOnChange) => (item: string) =>
  (
    <li className={Styles.multiSelect__item}>
      <Checkbox label={item} checked={selected.includes(item)} onChange={onChange} />
    </li>
  );

export const MultiSelect: FunctionComponent<MultiSelectProps> = ({ label, items, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
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
      <div className={Styles.multiSelect__label} onClick={toggleDropdown}>
        {label}
      </div>
      <ul className={joinClasses(Styles.multiSelect__list, conditionClass(isOpen, Styles.multiSelect__list_open))}>
        {items.map(renderItem(selected, handleItemChange))}
      </ul>
    </div>
  );
};
