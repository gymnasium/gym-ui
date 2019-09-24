/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { color, typeface } from '../../styles';
import Button from '../Button';
import Icon from '../Icon';
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
      <Icon iconIndex={0} />
      <Icon iconIndex={1} />
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
