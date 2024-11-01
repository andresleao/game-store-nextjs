import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight
} as Meta;

export const Default: StoryObj<HighlightProps> = {
  args: {
    title: 'Read Dead it\'s back',
    subtitle: 'Come see John\'s adventures',
    buttonLabel: 'Buy now',
  }
};
