import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { GymButton } from '../src';
import { color } from '../src/styles';

storiesOf('GymButton', module)
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <GymButton onClick={action('Button clicked')}>Default</GymButton>
    )
  )
  .addWithJSX(
    'full width',
    (): React.ReactElement => (
      <GymButton fullWidth onClick={action('Button clicked')}>
        Full Width
      </GymButton>
    )
  )
  .addWithJSX(
    'all caps',
    (): React.ReactElement => (
      <GymButton allCaps onClick={action('Button clicked')}>
        all caps
      </GymButton>
    )
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
        <GymButton lightBorder onClick={action('Button clicked')}>
          Light Border
        </GymButton>
      </div>
    )
  );
