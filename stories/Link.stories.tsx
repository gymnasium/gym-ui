import React from 'react';

import { storiesOf } from '@storybook/react';

import { Link } from '../src';
import { color } from '../src/colors';

storiesOf('Link', module)
  .addWithJSX(
    'default (light)',
    (): React.ReactElement => (
      <>
        <Link>This is a link on a light background</Link>
        <div style={{ backgroundColor: color.black }}>
          <Link>This is a link on a dark background</Link>
        </div>
      </>
    )
  )
  .addWithJSX(
    'dark',
    (): React.ReactElement => (
      <>
        <div style={{ backgroundColor: color.black }}>
          <Link dark>This is a dark link on a dark background</Link>
        </div>
        <Link dark>This is a dark link on a light background</Link>
      </>
    )
  );
