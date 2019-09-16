/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { typeface } from '../../styles';

interface Props {
  children: React.ReactNode;
  color?: string;
  textAlign?: string;
}

const Subtitle: React.FunctionComponent<Props> = ({
  children,
  textAlign = 'left',
  color = 'inherit',
}: Props): React.ReactElement => {
  const style = css`
    font-family: ${typeface.title};
    color: ${color};
    text-align: ${textAlign};
    text-transform: capitalize;
  `;

  return <h2 css={style}>{children}</h2>;
};

export default Subtitle;
