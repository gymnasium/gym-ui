import React from 'react';

import { storiesOf } from '@storybook/react';

import { Subtitle } from '../src';
import { color } from '../src/styles';

storiesOf('Subtitle', module)
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <>
        <Subtitle>about us</Subtitle>
      </>
    )
  )
  .addWithJSX(
    'on dark background',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.black, color: color.white }}>
          <Subtitle>This is a Subtitle on a dark background</Subtitle>
        </div>
      </>
    )
  )
  .addWithJSX(
    'center aligned',
    (): React.ReactElement => (
      <>
        <Subtitle textAlign="center">Center-aligned Subtitle</Subtitle>
      </>
    )
  )
  .addWithJSX(
    'right aligned',
    (): React.ReactElement => (
      <>
        <Subtitle textAlign="right">Right-aligned Subtitle</Subtitle>
      </>
    )
  )
  .addWithJSX(
    'with color override',
    (): React.ReactElement => (
      <>
        <Subtitle color={color.orange}>Orange Subtitle</Subtitle>
      </>
    )
  );
