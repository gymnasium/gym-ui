/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const listStyle = css``;
const titleStyle = css``;
const dataStyle = css``;
const dataSpanStyle = css``;

interface Props {
  title?: string;
  data: string[];
}

const BulletedList: React.FunctionComponent<Props> = ({
  title = '',
  data,
}: Props): React.ReactElement => {
  return (
    <dl css={listStyle}>
      {title && <dt css={titleStyle}>{title}</dt>}
      {data &&
        data.map(
          (dataItem): React.ReactElement => {
            return (
              <dd css={dataStyle} key={dataItem}>
                <span css={dataSpanStyle}>{dataItem}</span>
              </dd>
            );
          }
        )}
    </dl>
  );
};

export default BulletedList;
