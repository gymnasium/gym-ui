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

  > dt {
    font: 900 1em/1.2 ${typeface.title};
    text-transform: uppercase;
    margin-bottom: 0.6em;
  }

  > dd {
    display: list-item;
    list-style: disc;
    color: ${color.orange};
    margin-top: 0.3em;

    > span {
      font: 1em/1.4 ${typeface.text};
      color: ${color.black};
    }
  }
`;

interface Props {
  title?: string;
  data: string[];
}

const BulletedList: React.FunctionComponent<Props> = ({
  title = '',
  data,
}: Props): React.ReactElement => {
  return (
    <dl css={style}>
      {title && <dt>{title}</dt>}
      {data &&
        data.map(
          (dataItem): React.ReactElement => {
            return (
              <dd key={dataItem}>
                <span>{dataItem}</span>
              </dd>
            );
          }
        )}
    </dl>
  );
};

export default BulletedList;
