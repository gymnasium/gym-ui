/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const titleStyle = css`
  font: 900 1rem/1.2 ${typeface.title};
  text-transform: uppercase;
  margin-left: 2.4rem;
  margin-top: 1rem;
`;

const style = css`
  font: 1rem/1.2 ${typeface.title};
  color: ${color.black};
  letter-spacing: 0.06rem;
  word-spacing: 0.05rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
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
