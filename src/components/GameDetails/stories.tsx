import { Meta, StoryObj } from '@storybook/react';
import GameDetails, { GameDetailsProps } from '.';
import GameDetailsMock from './mock';

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: GameDetailsMock,
  argTypes: {
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    genres: {
      control: {
        type: 'inline-check',
      },
      options: ['Action', 'Role-playing'],
    },
    platforms: {
      control: {
        type: 'inline-check',
      },
      options: ['mac', 'linux', 'windows'],
    },
  }
} as Meta;

export const Default: StoryObj<GameDetailsProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
};
