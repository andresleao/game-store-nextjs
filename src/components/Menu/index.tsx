'use client';
import { useState } from 'react';
import { ShoppingCart as ShoppingCartIcon, Menu as MenuIcon, Close as CloseIcon } from '@styled-icons/material-outlined';
import {SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline';
import Logo from '../Logo';
import * as S from './styles'
import Button from '../Button';
import MediaMatch from '../MediaMatch';
import Link from 'next/link';

export type MenuProps = {
  userName?: string;
}

const Menu = ({
  userName
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
         <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan='medium'>
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search"/>
        </S.IconWrapper>
        <S.IconWrapper>
         <ShoppingCartIcon aria-label="Open Shopping Cart"/>
        </S.IconWrapper>
        {!userName &&
          <MediaMatch greaterThan='medium'>
            <Button>Sign in</Button>
          </MediaMatch>
        }
      </S.MenuGroup>

      <S.MenuFull
        aria-hidden={!isOpen}
        $isOpen={isOpen}
      >
        <S.CloseButton>
        <CloseIcon
            aria-label="Close Menu"
            onClick={() => setIsOpen(false)}
        />
        </S.CloseButton>
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!userName &&
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          }
        </S.MenuNav>
        {!userName &&
          <S.RegisterBox>
            <Button
              fullWidth
              size="large"
            >
              Login now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign In">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        }
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
