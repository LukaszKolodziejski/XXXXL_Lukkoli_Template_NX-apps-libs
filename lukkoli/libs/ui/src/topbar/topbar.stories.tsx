import { Story, Meta } from '@storybook/react';
import { AvatarProps } from '../avatar/models';
import { TopbarProps } from './models';
import { Topbar } from './topbar';

export default {
  component: Topbar,
  title: 'Topbar',
} as Meta;

const Template: Story<TopbarProps> = (args) => <Topbar {...args} />;

const SRC =
  'https://media.licdn.com/dms/image/C4E03AQHRo8YgyxIqTA/profile-displayphoto-shrink_200_200/0/1634070623836?e=1677715200&v=beta&t=pvm36LTHlghhCQbu4ZtnSJ4iiiLAZ_IZUNNpnM9LG3I';
const TEXT = 'User avatar';
const AVATAR_PROPS: AvatarProps = {
  text: TEXT,
  src: SRC,
  shapes: true,
  shadow: true,
  rotating: true,
};

export const Default = Template.bind({});
Default.args = {
  title: 'Dashboard have too big name to be displayed',
  ...AVATAR_PROPS,
};

export const WithoutAvatar = Template.bind({});
WithoutAvatar.args = {
  title: 'Dashboard have too big name to be displayed',
  hideAvatar: true,
  ...AVATAR_PROPS,
};
