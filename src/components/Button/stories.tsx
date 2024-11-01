import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text'
    },
    icon: {
      type: 'function'
    }
  }
} as Meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'By now'
  }
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    children: 'By now',
    icon: <AddShoppingCart />
  }
};

export const AsLink: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    children: 'By now',
    as: "a",
    href: "/link"
  }
};
