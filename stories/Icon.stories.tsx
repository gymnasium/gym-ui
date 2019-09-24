import React from 'react';

import { storiesOf } from '@storybook/react';

import { Icon } from '../src';
import { color } from '../src/styles';

storiesOf('Icon', module)
  .addParameters({
    component: Icon,
    backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
  })
  .addWithJSX('Aquent', (): React.ReactElement => <Icon iconIndex={0} />)
  .addWithJSX('Vitamin T', (): React.ReactElement => <Icon iconIndex={1} />);
