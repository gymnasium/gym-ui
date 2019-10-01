import React from 'react';

import { GymIcon } from '../src';
import { color } from '../src/styles';
import { themes } from '@storybook/theming';

export default {
  title: 'Gym UI|Components/GymIcon',

  parameters: {
    component: GymIcon,
    // backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
    options: {
      theme: themes.dark,
    },
  },
};

export const aquent = (): React.ReactElement => (
  <GymIcon
    name="Aquent Icon"
    src="https://thegymnasium.com/static/gymnasium/images/aquent-icon.56d05be37e9a.png"
    href="https://www.aquent.com"
  />
);

aquent.story = {
  name: 'Aquent',
};

export const vitaminT = (): React.ReactElement => (
  <GymIcon
    name="Vitamin T Icon"
    src="https://thegymnasium.com/static/gymnasium/images/vitamin-t-icon.32e5d567b8ca.png"
    href="https://vitamintalent.com/"
  />
);

vitaminT.story = {
  name: 'Vitamin T',
};
