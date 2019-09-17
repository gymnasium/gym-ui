/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css`
  font: 1em/1.2 ${typeface.title};
  color: ${color.black};
  letter-spacing: 0.06em;
  word-spacing: 0.05em;
  margin-bottom: 0.6em;
  margin-left: 1.2em;
  margin-top: 1em;
`;
const titleStyle = css`
  font: 900 1em/1.2 ${typeface.title};
  text-transform: uppercase;
  margin-bottom: 0.6em;
`;

interface Props {
  title?: string;
  children: React.ReactNode;
}

const BulletedList: React.FunctionComponent<Props> = ({
  title = '',
  children,
}: Props): React.ReactElement => {
  return (
    <ul css={style}>
      {title && <div css={titleStyle}>{title}</div>}
      {children}
    </ul>
  );
};

export default BulletedList;
