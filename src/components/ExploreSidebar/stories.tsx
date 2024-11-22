import { Meta, StoryObj } from '@storybook/react';
import ExploreSidebar, { ExploreSidebarProps } from '.';
import SidebarItemsMock from './mock';

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    layout: 'fullscreen',

  },
  args: {
    items: SidebarItemsMock
  }
} as Meta;

export const Default: StoryObj<ExploreSidebarProps> = {
  render: (args) => (<ExploreSidebar {...args} />),
};

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  ),
};
