import { Meta, StoryObj } from '@storybook/react';
import GameCardSlider, { GameCardSliderProps } from '.';
import items from './mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<GameCardSliderProps>;

export const Default: StoryObj<GameCardSliderProps> = {
  args: { items },
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  ),
};
