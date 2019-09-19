import React from 'react';

import { storiesOf } from '@storybook/react';

import { Card } from '../src';
import { typeface, color } from '../src/styles';

storiesOf('Card', module)
  .addParameters({
    component: Card,
    backgrounds: [
      {
        name: 'Light grey background',
        value: color.grey.lightPageBackground,
        default: true,
      },
    ],
  })
  .addWithJSX(
    'with simple content',
    (): React.ReactElement => (
      <Card>
        <div>
          <p>Hi</p>
          <p style={{ backgroundColor: color.teal }}>
            Full width content is possible
          </p>
        </div>
      </Card>
    )
  )
  .addWithJSX(
    'with columns',
    (): React.ReactElement => (
      <Card mainColumn={2}>
        <div style={{ width: '150px' }}>
          <p style={{ backgroundColor: color.teal }}>Hello there!</p>
          <p>Left column here</p>
        </div>
        <div>
          <p>Hi</p>
          <p>Main content section</p>
          <p>You should see columns on the left and right</p>
          <p style={{ backgroundColor: color.teal }}>
            This section takes all possible width
          </p>
          <p>Heighest column</p>
          <p>Heighest column</p>
          <p>Heighest column</p>
        </div>
        <div style={{ width: '100px' }}>
          <p style={{ backgroundColor: color.teal }}>Right column content</p>
          <p>more content</p>
        </div>
      </Card>
    )
  );
