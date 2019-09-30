import React from 'react';

import { UserLogoutMenu } from '../src';
import { color } from '../src/styles';

export default {
  title: 'UserLogoutMenu',

  parameters: {
    component: UserLogoutMenu,
    backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
  },
};

export const defaultStory = (): React.ReactElement => (
  <div>
    <UserLogoutMenu userId="Ali" logoutUrl="/logout" />
  </div>
);

defaultStory.story = {
  name: 'default',
};
