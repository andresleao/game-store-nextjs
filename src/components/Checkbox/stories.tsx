import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: {
      action: { action: 'checked' }
    }
  }
} as Meta;

export const Default: StoryObj<CheckboxProps> = {
  render: (args) => (
    <Checkbox isChecked {...args} />
  ),
};
