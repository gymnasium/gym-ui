/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const titleStyle = css`
  font: 900 1em/1.2 ${typeface.title};
  text-transform: uppercase;
  margin-left: 3.6em;
  margin-top: 1em;
`;

const style = css`
  font: 1em/1.2 ${typeface.title};
  color: ${color.black};
  letter-spacing: 0.06em;
  word-spacing: 0.05em;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  margin-left: 1.2em;
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
    <div>
      {title && <header css={titleStyle}>{title}</header>}
      <ul css={style}>{children}</ul>
    </div>
  );
};

export default BulletedList;
