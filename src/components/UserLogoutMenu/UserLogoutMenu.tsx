/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css``;

interface Props {
  userId: string;
}

const UserLogoutMenu: React.FunctionComponent<Props> = ({
  userId,
}: Props): React.ReactElement => (
  <p>
    Logout <b>{userId}</b>
  </p>
);
export default UserLogoutMenu;
