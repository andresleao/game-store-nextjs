import { Meta, StoryObj } from '@storybook/react';
import Slider from '.';
import { Settings } from 'react-slick';
import styled from 'styled-components';

export default {
  title: 'Slider',
  component: Slider
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const verticalSettings: Settings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
}

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Default: StoryObj = {
  render: (args) => (
    <Slider settings={settings} {...args}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Slider>
  ),
};

export const Vertical: StoryObj = {
  render: (args) => (
    <Slider settings={verticalSettings} {...args}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Slider>
  ),
};
