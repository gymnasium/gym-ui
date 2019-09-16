import React from 'react';

import { storiesOf } from '@storybook/react';

import { BulletedList } from '../src';
import { color } from '../src/styles';

storiesOf('BulletedList', module).addWithJSX(
  'default',
  (): React.ReactElement => {
    const title = 'Skills covered';
    const data = [
      'HTML basics',
      'CSS basics',
      'Bootstrap basics',
      'And more...',
    ];

    return <BulletedList title={title} data={data} />;
  }
);
