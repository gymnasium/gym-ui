import React from 'react';

import { storiesOf } from '@storybook/react';

import { PrimaryNavigation } from '../src';

storiesOf('PrimaryNavigation', module)
  .addParameters({
    component: PrimaryNavigation,
  })
  .addWithJSX('logged out', (): React.ReactElement => <PrimaryNavigation />)
  .addWithJSX(
    'logged in',
    (): React.ReactElement => <PrimaryNavigation isLoggedIn userId="Ali" />
  );
