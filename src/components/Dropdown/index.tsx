import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLSelectElement> {
  options: Array<string | number>;
}

const Dropdown = ({ options, onChange, ...rest }: Props) => {
  return (
    <select {...rest} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
