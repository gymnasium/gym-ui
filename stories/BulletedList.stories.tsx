import React from 'react';

import { storiesOf } from '@storybook/react';

import { BulletedList } from '../src';
import { color } from '../src/styles';

storiesOf('BulletedList', module)
  .addWithJSX(
    'with title',
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
  )
  .addWithJSX(
    'without title',
    (): React.ReactElement => {
      const data = [
        'HTML basics',
        'CSS basics',
        'Bootstrap basics',
        'And more...',
      ];

      return <BulletedList data={data} />;
    }
  );
