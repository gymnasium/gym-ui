import React from 'react';

import { storiesOf } from '@storybook/react';

import { UserLogoutMenu } from '../src';

storiesOf('UserLogoutMenu', module)
  .addWithJSX('open', (): React.ReactElement => <UserLogoutMenu userId="Ali" />)
  .addWithJSX(
    'closed',
    (): React.ReactElement => <UserLogoutMenu userId="Ali" />
  );
