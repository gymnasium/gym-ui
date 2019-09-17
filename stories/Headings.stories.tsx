import React from 'react';

import { storiesOf } from '@storybook/react';

import { H1, H2, H3, H4 } from '../src';
import { color } from '../src/styles';

storiesOf('Headings', module)
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <>
        <H1>about us H1</H1>
        <H2>about us H2</H2>
        <H3>about us H3</H3>
        <H4>about us H4</H4>
      </>
    )
  )
  .addWithJSX(
    'Inherit dark background and white foreground',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.black, color: color.white }}>
          <H1>This is H1 on a dark background</H1>
          <H2>This is H2 on a dark background</H2>
          <H3>This is H3 on a dark background</H3>
          <H4>This is H4 on a dark background</H4>
        </div>
      </>
    )
  )
  .addWithJSX(
    'left aligned',
    (): React.ReactElement => (
      <>
        <H1 textAlign="left">Left-aligned H1</H1>
        <H2 textAlign="left">Left-aligned H2</H2>
        <H3 textAlign="left">Left-aligned H3</H3>
        <H4 textAlign="left">Left-aligned H4</H4>
      </>
    )
  )
  .addWithJSX(
    'right aligned',
    (): React.ReactElement => (
      <>
        <H1 textAlign="right">Right-aligned H1</H1>
        <H2 textAlign="right">Right-aligned H2</H2>
        <H3 textAlign="right">Right-aligned H3</H3>
        <H4 textAlign="right">Right-aligned H4</H4>
      </>
    )
  )
  .addWithJSX(
    'center aligned',
    (): React.ReactElement => (
      <>
        <H1 textAlign="center">Right-aligned H1</H1>
        <H2 textAlign="center">Right-aligned H2</H2>
        <H3 textAlign="center">Right-aligned H3</H3>
        <H4 textAlign="center">Right-aligned H4</H4>
      </>
    )
  )
  .addWithJSX(
    'with color override',
    (): React.ReactElement => (
      <>
        <H1 color={color.orange}>Orange H1</H1>
        <H2 color={color.orange}>Orange H2</H2>
        <H3 color={color.orange}>Orange H3</H3>
        <H4 color={color.orange}>Orange H4</H4>
      </>
    )
  );
