import React from 'react';

import { PrimaryNavigation } from '../src';

export default {
  title: 'Gym UI|Navigation/PrimaryNavigation',

  parameters: {
    component: PrimaryNavigation,
  },
};

export const loggedOut = (): React.ReactElement => <PrimaryNavigation />;

loggedOut.story = {
  name: 'logged out',
};

export const loggedIn = (): React.ReactElement => (
  <PrimaryNavigation isLoggedIn userId="Ali" logoutUrl="/logout" />
);

loggedIn.story = {
  name: 'logged in',
};
