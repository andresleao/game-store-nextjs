import { Meta, StoryObj } from '@storybook/react';
import MediaMatch, { MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta;

export const Default: StoryObj<MediaMatchProps> = {}

export const Desktop: StoryObj<MediaMatchProps> = {
  args: {
    greaterThan: "medium",
    children: <h1 data-testid="desktop">Only on Desktop</h1>
  }
};

export const Mobile: StoryObj<MediaMatchProps> = {
  args: {
    lessThan: "medium",
    children: <h1 data-testid="mobile">Only on Mobile</h1>
  }
};
