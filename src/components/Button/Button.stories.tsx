import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module).addWithJSX(
  'from component folder',
  (): React.ReactElement => <Button />
);
