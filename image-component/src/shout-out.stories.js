import React from 'react';

import { ShoutOut } from './shout-out';

export default {
  title: 'ShoutOut',
  component: ShoutOut,
};

const Template = (args) => <ShoutOut {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://varun.ca/varun-toy.jpg',
  username: '@winkerVSbecks',
};
