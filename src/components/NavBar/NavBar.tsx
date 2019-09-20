/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css``;

interface Props {
  children: React.ReactNode;
}

const NavBar: React.FunctionComponent<Props> = ({
  children,
}: Props): React.ReactElement => <div css={style}>{children}</div>;

export default NavBar;
