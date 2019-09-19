import React from 'react';

import { storiesOf } from '@storybook/react';

import { Separator } from '../src';

storiesOf('Separator', module).addWithJSX(
  'example',
  (): React.ReactElement => <Separator />
);
