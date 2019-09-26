/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css``;

interface Props {
  children?: React.ReactNode;
}

const ListItem: React.FunctionComponent<Props> = ({
  children,
}: Props): React.ReactElement => <li css={style}>{children}</li>;
export default ListItem;
