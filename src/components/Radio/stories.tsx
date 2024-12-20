import { Meta, StoryObj } from '@storybook/react';
import Radio from '.';

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

export const Default: StoryObj = {
  render: (args) => (
    <>
      <div style={{ padding: 10 }}>
        <Radio
          label="primeiro"
          labelFor="primeiro"
          id="primeiro"
          name="nome"
          value="primeiro"
          defaultChecked
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="segundo"
          labelFor="segundo"
          id="segundo"
          name="nome"
          value="segundo"
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="terceiro"
          labelFor="terceiro"
          id="terceiro"
          name="nome"
          value="terceiro"
          {...args}
        />
      </div>
    </>
  ),
};
