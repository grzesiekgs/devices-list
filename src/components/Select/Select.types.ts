export type SelectOnChange = (value: string) => void;

export interface SelectProps {
  value: string;
  items: string[];
  className?: string;
  onChange: SelectOnChange;
}
