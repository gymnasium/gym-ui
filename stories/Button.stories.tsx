import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module).addWithJSX(
  'test',
  (): React.ReactElement => <Button />
);
