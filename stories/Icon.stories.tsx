import React from 'react';

import { storiesOf } from '@storybook/react';

import { GymIcon } from '../src';
import { color } from '../src/styles';

storiesOf('GymIcon', module)
  .addParameters({
    component: GymIcon,
    backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
  })
  .addWithJSX('Aquent', (): React.ReactElement => <GymIcon iconIndex={0} />)
  .addWithJSX('Vitamin T', (): React.ReactElement => <GymIcon iconIndex={1} />);
