/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { color } from '../../styles';
import Button from '../Button';
import GymIcon from '../GymIcon';
import NavBar from '../NavBar';
import UserLogoutMenu from '../UserLogoutMenu';

interface Props {
  // children: React.ReactNode;
  isLoggedIn?: boolean;
  userId?: string;
  logoutUrl?: string;
}

const PrimaryNavigation: React.FunctionComponent<Props> = ({
  isLoggedIn = false,
  userId = '',
  logoutUrl = '',
}: // children,
Props): React.ReactElement => {
  const leftContent = !isLoggedIn && <Button isSmall>Sign Up</Button>;
  const rightContent = (
    <Fragment>
      {isLoggedIn && <UserLogoutMenu userId={userId} logoutUrl={logoutUrl} />}
      <GymIcon
        name="Aquent Icon"
        src="https://thegymnasium.com/static/gymnasium/images/aquent-icon.56d05be37e9a.png"
        href="https://www.aquent.com"
      />
      <GymIcon
        name="Vitamin T Icon"
        src="https://thegymnasium.com/static/gymnasium/images/vitamin-t-icon.32e5d567b8ca.png"
        href="https://vitamintalent.com/"
      />
    </Fragment>
  );
  return (
    <NavBar
      backgroundColor={color.black}
      height="50px"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  );
};

export default PrimaryNavigation;
