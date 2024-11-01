import { Meta, StoryObj } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: { control: 'text' },
    ribbonSize: { control: { type: 'select', options: ['normal', 'large'] } },
    ribbonColor: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
  args: {
    img: 'https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
};

export const WithRibbon: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
};

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
