import React from 'react';

import { storiesOf } from '@storybook/react';

import { GymIcon } from '../src';
import { color } from '../src/styles';

storiesOf('GymIcon', module)
  .addParameters({
    component: GymIcon,
    backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
  })
  .addWithJSX(
    'Aquent',
    (): React.ReactElement => (
      <GymIcon
        name="Aquent Icon"
        src="https://thegymnasium.com/static/gymnasium/images/aquent-icon.56d05be37e9a.png"
        href="https://www.aquent.com"
      />
    )
  )
  .addWithJSX(
    'Vitamin T',
    (): React.ReactElement => (
      <GymIcon
        name="Vitamin T Icon"
        src="https://thegymnasium.com/static/gymnasium/images/vitamin-t-icon.32e5d567b8ca.png"
        href="https://vitamintalent.com/"
      />
    )
  );
