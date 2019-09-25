import React from 'react';

import { storiesOf } from '@storybook/react';

import { GymLogo } from '../src';
import { color } from '../src/styles';

storiesOf('GymLogo', module)
  .addParameters({
    component: GymLogo,
    backgrounds: [
      { name: 'Nav dark grey', value: color.grey.dark, default: true },
    ],
  })
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <GymLogo src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg" />
    )
  )
  .addWithJSX(
    'with dimensions override',
    (): React.ReactElement => (
      <GymLogo
        src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg"
        width="300px"
        height="50px"
      />
    )
  )
  .addWithJSX(
    'background color override',
    (): React.ReactElement => (
      <GymLogo
        src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg"
        backgroundColor={color.black}
      />
    )
  );
