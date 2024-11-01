import { Meta, StoryObj } from '@storybook/react';
import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      control: 'text'
    },
  },
  args: {
    children: "Best Seller"
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Default: StoryObj<RibbonProps> = {
  render: (args) => (
    <div style={{ width: '40rem', height: '25rem', position: 'relative', backgroundColor: '#888'}}>
      <Ribbon {...args} />
    </div>
  ),
};
