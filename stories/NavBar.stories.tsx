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
      );
    }
  )
  .addWithJSX(
    'dark gray background',
    (): React.ReactElement => {
      return (
        <NavBar backgroundColor={color.grey.dark}>
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
      );
    }
  )
  .addWithJSX(
    'right-justified',
    (): React.ReactElement => {
      return (
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
      );
    }
  )
  .addWithJSX(
    'centered',
    (): React.ReactElement => {
      return (
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
      );
    }
  );
