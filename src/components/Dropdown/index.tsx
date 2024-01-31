import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Dropdown = ({ options, onChange, ...rest }: Props) => {
  return (
    <select {...rest} onChange={onChange}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
