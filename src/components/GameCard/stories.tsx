import { Meta, StoryObj } from '@storybook/react';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rocketstar Games',
    img: 'https://images.unsplash.com/photo-1640955011254-39734e60b16f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 229,99'
  }
} as Meta;

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
};

export const WithRibbon: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
};

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
