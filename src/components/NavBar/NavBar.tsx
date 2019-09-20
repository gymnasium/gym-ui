/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1rem;
  * {
    margin: 0 1rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const NavBar: React.FunctionComponent<Props> = ({
  children,
}: Props): React.ReactElement => <div css={style}>{children}</div>;

export default NavBar;
