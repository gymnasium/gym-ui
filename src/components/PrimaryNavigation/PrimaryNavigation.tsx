/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';
import Button from '../Button';

const style = css`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: ${color.black};
`;

interface Props {
  // children: React.ReactNode;
  isLoggedIn?: boolean;
  userId?: string;
}

const PrimaryNavigation: React.FunctionComponent<Props> = ({
  isLoggedIn = false,
  userId = undefined,
}: // children,
Props): React.ReactElement => (
  <nav css={style}>{!isLoggedIn && <Button isSmall>Sign Up</Button>}</nav>
);

export default PrimaryNavigation;
