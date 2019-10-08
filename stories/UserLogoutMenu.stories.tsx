import React from 'react';
import { themes } from '@storybook/theming';

import { UserLogoutMenu } from '../src';

export default {
  title: 'Gym UI|Components/UserLogoutMenu',

  parameters: {
    component: UserLogoutMenu,
    // backgrounds: [{ name: 'Nav black', value: color.grey[900], default: true }],
    options: {
      theme: themes.dark,
    },
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
