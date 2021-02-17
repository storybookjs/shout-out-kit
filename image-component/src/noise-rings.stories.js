import React from 'react';

import { NoiseRings } from './noise-rings';

export default {
  title: 'NoiseRings',
  component: NoiseRings,
  args: {
    width: 1200,
    height: 630,
    strokeWidth: 8,
  },
};

const Template = (args) => (
  <NoiseRings
    {...args}
    style={{
      // width: '100%',
      // height: 'auto',
      backgroundColor: '#131415',
    }}
  />
);

export const Default = Template.bind({});
Default.args = {};

export const SeedBasedImage = Template.bind({});
SeedBasedImage.args = {
  seed: '@winkerVSbecks',
};
