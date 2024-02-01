import { ButtonHTMLAttributes } from 'react';
import * as Styles from './index.styles';

export type DropdownOption = { value: string; displayName: string };

interface Props extends ButtonHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
}

const Dropdown = ({ value, options, onChange, ...rest }: Props) => {
  return (
    <Styles.Container value={value} {...rest} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.displayName}
        </option>
      ))}
    </Styles.Container>
  );
};

export default Dropdown;
