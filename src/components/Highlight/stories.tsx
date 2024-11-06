import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '.';
import highlight from './mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {...highlight}
} as Meta;

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
};

export const WithFloatImg: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
};

WithFloatImg.args = {
  floatImg: '/img/red-dead-float.png'
}
