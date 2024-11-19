import { Meta, StoryObj } from '@storybook/react';
import TextContent, { TextContentProps } from '.';
import TextContentMock from './mock';

export default {
  title: 'TextContent',
  component: TextContent,
  args: TextContentMock,
  parameters: {
    backgrounds: {
      default: '#06092B'
    }
  }
} as Meta;

export const Default: StoryObj<TextContentProps>  = {
  render: (args) => (
    <TextContent {...args} />
  ),
};
