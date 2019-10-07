import React from 'react';

import { SecondaryNavigation } from '../src';

export default {
  title: 'Gym UI|Navigation/SecondaryNavigation',

  parameters: {
    component: SecondaryNavigation,
  },
};

export const loggedOut = (): React.ReactElement => <SecondaryNavigation />;

loggedOut.story = {
  name: 'logged out',
};

export const loggedIn = (): React.ReactElement => (
  <SecondaryNavigation isLoggedIn />
);

loggedIn.story = {
  name: 'logged in',
};
