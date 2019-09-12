import React from 'react';

import { storiesOf } from '@storybook/react';

import { Link } from '../src';

storiesOf('Link', module).addWithJSX(
  'default',
  (): React.ReactElement => <Link>This is a link</Link>
);
