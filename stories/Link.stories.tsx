import React from 'react';

import { storiesOf } from '@storybook/react';

import { Link } from '../src';
import { color } from '../src/styles';

storiesOf('Link', module)
  .addParameters({
    component: Link,
    componentSubtitle: 'A link to the past',
  })
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <>
        <Link to="/">This is the default link on a light background.</Link>{' '}
        <Link isDark to="/">
          This is a dark link on a light background
        </Link>
        <div style={{ backgroundColor: color.black }}>
          <Link to="/"> This is the default link on a dark background.</Link>{' '}
          <Link isLight to="/">
            This is a light link on a dark background
          </Link>
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
    'with target and title',
    (): React.ReactElement => (
      <Link target="_blank" to="/" title="Go home">
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
