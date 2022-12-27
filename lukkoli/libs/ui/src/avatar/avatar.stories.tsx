import { Story, Meta } from '@storybook/react';
import { Avatar } from './avatar';
import { AvatarProps } from './models';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

const SRC =
  'https://media.licdn.com/dms/image/C4E03AQHRo8YgyxIqTA/profile-displayphoto-shrink_200_200/0/1634070623836?e=1677715200&v=beta&t=pvm36LTHlghhCQbu4ZtnSJ4iiiLAZ_IZUNNpnM9LG3I';
const TEXT = 'User avatar';

export const Basic = Template.bind({});
Basic.args = { src: SRC, text: TEXT };

export const WithShapes = Template.bind({});
WithShapes.args = {
  src: SRC,
  text: TEXT,
  shapes: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  src: SRC,
  text: TEXT,
  shapes: true,
  shadow: true,
};

export const WithLetter = Template.bind({});
WithLetter.args = {
  text: TEXT,
  shapes: true,
  shadow: true,
  letter: 'A',
};

export const Rotating = Template.bind({});
Rotating.args = {
  text: TEXT,
  src: SRC,
  shapes: true,
  shadow: true,
  rotating: true,
};
