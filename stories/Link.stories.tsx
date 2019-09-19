import React from 'react';

import { storiesOf } from '@storybook/react';

import { Link } from '../src';
import { color } from '../src/styles';

storiesOf('Link', module)
  .addParameters({
    component: Link,
  })
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <>
        <Link to="/">This is the default link on a light background</Link>
        <br />
        <br />
        <div style={{ backgroundColor: color.black }}>
          <br />
          <Link to="/"> This is the default link on a dark background</Link>
          <br />
          <br />
        </div>
      </>
    )
  )
  .addWithJSX(
    'dark',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.white }}>
          <Link to="/" isDark>
            This is a dark link
          </Link>
        </div>
      </>
    )
  )
  .addWithJSX(
    'light',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.black }}>
          <br />
          <br />
          <Link to="/" isLight>
            This is a light link
          </Link>
          <br />
          <br />
        </div>
      </>
    )
  )
  .addWithJSX(
    'with target',
    (): React.ReactElement => (
      <Link target="_blank" to="/">
        This link opens a new tab or window
      </Link>
    )
  )
  .addWithJSX(
    'with rel attribute e.g. noopener noreferrer',
    (): React.ReactElement => (
      <Link to="/" rel="noopener noreferrer">
        This link includes rel=&quot;noopener noreferrer&quot;
      </Link>
    )
  );
