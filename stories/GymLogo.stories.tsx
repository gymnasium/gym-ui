import React from 'react';

import { GymLogo } from '../src';
import { color } from '../src/styles';

export default {
  title: 'Gym UI|GymLogo',

  parameters: {
    component: GymLogo,

    backgrounds: [
      { name: 'Nav dark grey', value: color.grey.dark, default: true },
    ],
  },
};

export const defaultStory = (): React.ReactElement => (
  <GymLogo src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg" />
);

defaultStory.story = {
  name: 'default',
};

export const withDimensionsOverride = (): React.ReactElement => (
  <GymLogo
    src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg"
    width="300px"
    height="50px"
  />
);

withDimensionsOverride.story = {
  name: 'with dimensions override',
};

export const backgroundColorOverride = (): React.ReactElement => (
  <GymLogo
    src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg"
    backgroundColor={color.black}
  />
);

backgroundColorOverride.story = {
  name: 'background color override',
};
