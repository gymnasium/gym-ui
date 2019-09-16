/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { typeface } from '../../styles';

interface Props {
  children: React.ReactNode;
  color?: string;
  textAlign?: string;
}

const Title: React.FunctionComponent<Props> = ({
  children,
  textAlign = 'center',
  color = 'inherit',
}: Props): React.ReactElement => {
  const style = css`
    font-family: ${typeface.title};
    color: ${color};
    text-align: ${textAlign};
    text-transform: uppercase;
  `;

  return <h1 css={style}>{children}</h1>;
};

export default Title;
