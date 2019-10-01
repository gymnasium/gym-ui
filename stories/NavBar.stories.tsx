import React from 'react';

import { NavBar, Link, Button, GymLogo } from '../src';
import { color } from '../src/styles';

const navElements = (
  <>
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
  </>
);

export default {
  title: 'Gym UI|Navigation/NavBar',

  parameters: {
    component: NavBar,
    backgrounds: [{ name: 'Nav black', value: color.black, default: true }],
  },
};

export const rightOnly = (): React.ReactElement => {
  return <NavBar rightContent={navElements} />;
};

rightOnly.story = {
  name: 'right only',
};

export const rightWithLogoOnLeft = (): React.ReactElement => {
  return (
    <NavBar
      rightContent={navElements}
      leftContent={
        <GymLogo src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg" />
      }
    />
  );
};

rightWithLogoOnLeft.story = {
  name: 'right with logo on left',
};

export const darkGrayBackground = (): React.ReactElement => {
  return (
    <NavBar
      backgroundColor={color.grey.dark}
      rightContent={navElements}
      leftContent={
        <GymLogo src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg" />
      }
    />
  );
};

darkGrayBackground.story = {
  name: 'dark gray background',
};

export const heightOverride = (): React.ReactElement => {
  return (
    <NavBar
      backgroundColor={color.grey.dark}
      height="3rem"
      rightContent={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <Link isLight to="/courses">
            Courses
          </Link>
          <Link isLight to="/jobs">
            Jobs
          </Link>
          <Link isLight to="/about">
            About
          </Link>
        </>
      }
    />
  );
};

heightOverride.story = {
  name: 'height override',
};

export const leftJustified = (): React.ReactElement => {
  return <NavBar leftContent={navElements} />;
};

leftJustified.story = {
  name: 'left-justified',
};
