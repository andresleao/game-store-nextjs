import { Meta, StoryObj } from '@storybook/react';
import Showcase, { ShowCaseProps } from '.';
import HightlightMock from '@/components/Highlight/mock';
import GameCardSlicerMock from '@/components/GameCardSlider/mock';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', backgroundColor: '#06092B' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

export const Default: StoryObj<ShowCaseProps> = {};

Default.args = {
  title: 'Most Popular',
  highlight: HightlightMock,
  games: GameCardSlicerMock,
}

export const WithoutHighlight: StoryObj<ShowCaseProps> = {};

WithoutHighlight.args = {
  title: 'Most Popular',
  games: GameCardSlicerMock,
}

export const WithoutGames: StoryObj<ShowCaseProps> = {};

WithoutGames.args = {
  title: 'Most Popular',
  highlight: HightlightMock,
}

