export type CheckboxOnChange = (value: string, checked: boolean) => void;

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: CheckboxOnChange;
}
