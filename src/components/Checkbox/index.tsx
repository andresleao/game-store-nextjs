import { capitalizeFirstLetter } from '@/utils/textHelpers';
import * as S from './styles';
import { InputHTMLAttributes, useState } from 'react';

export type CheckboxProps = {
  label?: string;
  labelColor?: 'white' | 'black';
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelColor = 'white',
  isChecked = false,
  onCheck,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    if (onCheck) onCheck(status);
  }

  return (
    <S.Wrapper>
      <S.Input
        id={label}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label &&
        <S.Label
          htmlFor={label}
          labelColor={labelColor}
        >
          {capitalizeFirstLetter(label)}
        </S.Label>
      }
    </S.Wrapper>
  );
};

export default Checkbox;
