import React from 'react';

import { storiesOf } from '@storybook/react';

import { UserLogoutMenu } from '../src';
import { color } from '../src/styles';

storiesOf('UserLogoutMenu', module)
  .addParameters({
    component: UserLogoutMenu,
    backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
  })
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <div>
        <UserLogoutMenu userId="Ali" logoutUrl="/logout" />
      </div>
    )
  );
