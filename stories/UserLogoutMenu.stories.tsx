import React from 'react';

import { storiesOf } from '@storybook/react';

import { UserLogoutMenu } from '../src';
import { color } from '../src/styles';

storiesOf('UserLogoutMenu', module)
  .addParameters({
    backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
  })
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <div
        style={{
          backgroundColor: color.black,
        }}
      >
        <UserLogoutMenu userId="Ali" logoutUrl="/logout" />
      </div>
    )
  );
