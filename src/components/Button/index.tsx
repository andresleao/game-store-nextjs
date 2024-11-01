import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement>
                  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean,
  icon?: React.ReactNode,
  as?: React.ElementType,
  href?: string,
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  as = 'button',
  href
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    as={as}
    href={href}
  >
    {icon}
    {!!children &&
      <span>
        {children}
      </span>
    }
  </S.Wrapper>
);

export default Button;
