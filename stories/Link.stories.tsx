import React from 'react';

import { storiesOf } from '@storybook/react';

import { Link } from '../src';
import { color } from '../src/styles';

storiesOf('Link', module)
  .addWithJSX(
    'default (light)',
    (): React.ReactElement => (
      <>
        <Link to="/">This is a link on a light background</Link>
        <div style={{ backgroundColor: color.black }}>
          <Link to="/"> This is a link on a dark background</Link>
        </div>
      </>
    )
  )
  .addWithJSX(
    'dark',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.black }}>
          <Link to="/" dark>
            This is a dark link on a dark background
          </Link>
        </div>
        <Link to="/" dark>
          This is a dark link on a light background
        </Link>
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
