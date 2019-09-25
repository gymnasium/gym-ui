/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { color } from '../../styles';
import Button from '../Button';
import NavBar from '../NavBar';
import Link from '../Link';
import GymLogo from '../GymLogo';

interface Props {
  isLoggedIn?: boolean;
}

const SecondaryNavigation: React.FunctionComponent<Props> = ({
  isLoggedIn = false,
}: Props): React.ReactElement => {
  const leftContent = (
    <GymLogo src="https://gymcms.xyz/img/brand/gymnasium-logo-white.svg" />
  );
  const rightContent = (
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
      {isLoggedIn ? (
        <Link isLight to="/dashboard">
          Dashboard
        </Link>
      ) : (
        <Button to="/login">Log In</Button>
      )}
    </Fragment>
  );
  return (
    <NavBar
      backgroundColor={color.black}
      height="70px"
      rightContent={rightContent}
      leftContent={leftContent}
    />
  );
};

export default SecondaryNavigation;
