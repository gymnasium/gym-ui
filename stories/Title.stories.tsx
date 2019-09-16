import React from 'react';

import { storiesOf } from '@storybook/react';

import { Title } from '../src';
import { color } from '../src/styles';

storiesOf('Title', module)
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <>
        <Title>About Us</Title>
      </>
    )
  )
  .addWithJSX(
    'on dark background',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.black, color: color.white }}>
          <Title>This is a Title on a dark background</Title>
        </div>
      </>
    )
  )
  .addWithJSX(
    'left aligned',
    (): React.ReactElement => (
      <>
        <Title textAlign="left">Left-aligned Title</Title>
      </>
    )
  )
  .addWithJSX(
    'right aligned',
    (): React.ReactElement => (
      <>
        <Title textAlign="right">Right-aligned Title</Title>
      </>
    )
  )
  .addWithJSX(
    'with color override',
    (): React.ReactElement => (
      <>
        <Title color={color.orange}>Orange Title</Title>
      </>
    )
  );
