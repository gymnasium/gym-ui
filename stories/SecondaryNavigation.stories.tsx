import React from 'react';

import { storiesOf } from '@storybook/react';

import { SecondaryNavigation } from '../src';

storiesOf('SecondaryNavigation', module)
  .addParameters({
    component: SecondaryNavigation,
  })
  .addWithJSX('logged out', (): React.ReactElement => <SecondaryNavigation />)
  .addWithJSX(
    'logged in',
    (): React.ReactElement => <SecondaryNavigation isLoggedIn />
  );
