import React from 'react';

import { storiesOf } from '@storybook/react';

import { GymButton } from '../src';
import { color } from '../src/styles';

storiesOf('GymButton', module)
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <GymButton
        onClick={(): void => {
          alert('Clicked!');
        }}
      >
        Default
      </GymButton>
    )
  )
  .addWithJSX(
    'full width',
    (): React.ReactElement => <GymButton fullWidth>Full Width</GymButton>
  )
  .addWithJSX(
    'all caps',
    (): React.ReactElement => <GymButton allCaps>all caps</GymButton>
  )
  .addWithJSX(
    'light border on a dark background',
    (): React.ReactElement => (
      <div
        style={{
          backgroundColor: color.grey.lightPageBackground,
          padding: '10px',
        }}
      >
        <GymButton lightBorder>Light Border</GymButton>
      </div>
    )
  );
