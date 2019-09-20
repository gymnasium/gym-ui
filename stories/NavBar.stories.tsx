import React from 'react';

import { storiesOf } from '@storybook/react';

import { NavBar, Link, Button } from '../src';
import { color } from '../src/styles';

storiesOf('NavBar', module)
  .addParameters({
    component: NavBar,
  })
  .addWithJSX(
    'example',
    (): React.ReactElement => {
      return (
        <div style={{ backgroundColor: color.black }}>
          <NavBar>
            <Link isLight to="/courses">
              Courses
            </Link>
            <Link isLight to="/jobs">
              Jobs
            </Link>
            <Link isLight to="/about">
              About
            </Link>
            <Button to="/login">Log In</Button>
          </NavBar>
        </div>
      );
    }
  );
