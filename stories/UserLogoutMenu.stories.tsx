import React from 'react';

import { storiesOf } from '@storybook/react';

import { UserLogoutMenu } from '../src';

storiesOf('UserLogoutMenu', module).addWithJSX(
  'default',
  (): React.ReactElement => <UserLogoutMenu userId="Ali" logoutUrl="/logout" />
);
