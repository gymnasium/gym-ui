import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { NavBar, Link, Button, GymLogo } from '../src';
import { color } from '../src/styles';

const navElements = (
  <Fragment>
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
  </Fragment>
);

storiesOf('NavBar', module)
  .addParameters({
    component: NavBar,
    backgrounds: [{ name: 'Nav black', value: color.black, default: true }],
  })
  .addWithJSX(
    'right only',
    (): React.ReactElement => {
      return <NavBar rightContent={navElements} />;
    }
  )
  .addWithJSX(
    'right with logo on left',
    (): React.ReactElement => {
      return (
        <NavBar
          rightContent={navElements}
          leftContent={<GymLogo backgroundColor="transparent" />}
        />
      );
    }
  )
  .addWithJSX(
    'dark gray background',
    (): React.ReactElement => {
      return (
        <NavBar
          backgroundColor={color.grey.dark}
          rightContent={navElements}
          leftContent={<GymLogo backgroundColor="transparent" />}
        />
      );
    }
  )
  .addWithJSX(
    'height override',
    (): React.ReactElement => {
      return (
        <NavBar
          backgroundColor={color.grey.dark}
          height="3rem"
          rightContent={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Fragment>
              <Link isLight to="/courses">
                Courses
              </Link>
              <Link isLight to="/jobs">
                Jobs
              </Link>
              <Link isLight to="/about">
                About
              </Link>
            </Fragment>
          }
        />
      );
    }
  )
  .addWithJSX(
    'left-justified',
    (): React.ReactElement => {
      return <NavBar leftContent={navElements} />;
    }
  );
