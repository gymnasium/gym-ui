import React from 'react';

import { storiesOf } from '@storybook/react';

import { NavBar, Link, Button } from '../src';
import { color } from '../src/styles';

storiesOf('NavBar', module)
  .addParameters({
    component: NavBar,
  })
  .addWithJSX(
    'default',
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
  )
  .addWithJSX(
    'right-justified',
    (): React.ReactElement => {
      return (
        <div style={{ backgroundColor: color.black }}>
          <NavBar justifyContent="right">
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
  )
  .addWithJSX(
    'centered',
    (): React.ReactElement => {
      return (
        <div style={{ backgroundColor: color.black }}>
          <NavBar justifyContent="center">
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
