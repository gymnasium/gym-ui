import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button/Button';

storiesOf('Button', module).addWithJSX(
  'from stories folder',
  (): React.ReactElement => <Button />
);
