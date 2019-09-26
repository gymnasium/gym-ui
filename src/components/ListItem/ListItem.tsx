/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css`
  display: list-item;
  list-style: disc;
  color: ${color.orange};
  margin-top: 0.3em;
  margin-left: 0;
  > span {
    font: 1em/1.4 ${typeface.text};
    color: ${color.black};
  }
`;

interface Props {
  children?: React.ReactNode;
}

const ListItem: React.FunctionComponent<Props> = ({
  children,
}: Props): React.ReactElement => (
  <li css={style}>
    <span>{children}</span>
  </li>
);
export default ListItem;
