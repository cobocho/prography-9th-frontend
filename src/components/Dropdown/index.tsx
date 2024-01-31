import { ButtonHTMLAttributes } from 'react';

export type DropdownOption = { value: string; displayName: string };

interface Props extends ButtonHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
}

const Dropdown = ({ value, options, onChange, ...rest }: Props) => {
  return (
    <select value={value} {...rest} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.displayName}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
