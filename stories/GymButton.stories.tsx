import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { GymButton } from '../src';
import { color } from '../src/styles';

const onClickAction = action('Button clicked');

storiesOf('GymButton', module)
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <GymButton onClick={onClickAction}>Default</GymButton>
    )
  )
  .addWithJSX(
    'full width',
    (): React.ReactElement => (
      <GymButton fullWidth onClick={onClickAction}>
        Full Width
      </GymButton>
    )
  )
  .addWithJSX(
    'all caps',
    (): React.ReactElement => (
      <GymButton allCaps onClick={onClickAction}>
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
        <GymButton lightBorder onClick={onClickAction}>
          Light Border
        </GymButton>
      </div>
    )
  )
  .addWithJSX(
    'hyperlink',
    (): React.ReactElement => <GymButton to="/">Default</GymButton>
  );
