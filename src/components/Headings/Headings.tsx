/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { jsx, css } from '@emotion/core';
import { typeface } from '../../styles';

interface Props {
  children: React.ReactNode;
  color?: string;
  textAlign?: string;
}

const H1: React.FunctionComponent<Props> = ({
  children,
  textAlign = 'center',
  color = 'inherit',
  ...rest
}: Props): React.ReactElement => {
  const style = css`
    font: 900 2.25rem/1.2 ${typeface.title};
    color: ${color};
    text-align: ${textAlign};
    text-transform: uppercase;
    font-weight: 900;
  `;

  return (
    <h1 css={style} {...rest}>
      {children}
    </h1>
  );
};

const H2: React.FunctionComponent<Props> = ({
  children,
  textAlign = 'left',
  color = 'inherit',
  ...rest
}: Props): React.ReactElement => {
  const style = css`
    font: 900 1.65rem/1.3 ${typeface.title};
    color: ${color};
    text-align: ${textAlign};
    text-transform: uppercase;
  `;

  return (
    <h2 css={style} {...rest}>
      {children}
    </h2>
  );
};

const H3: React.FunctionComponent<Props> = ({
  children,
  textAlign = 'left',
  color = 'inherit',
  ...rest
}: Props): React.ReactElement => {
  const style = css`
    font: bold 1.45rem/1.4 ${typeface.title};
    color: ${color};
    text-align: ${textAlign};
    text-transform: capitalize;
  `;

  return (
    <h3 css={style} {...rest}>
      {children}
    </h3>
  );
};

const H4: React.FunctionComponent<Props> = ({
  children,
  textAlign = 'left',
  color = 'inherit',
  ...rest
}: Props): React.ReactElement => {
  const style = css`
    font: bold 1.25rem/1.4 ${typeface.title};
    color: ${color};
    text-align: ${textAlign};
    text-transform: capitalize;
  `;

  return (
    <h4 css={style} {...rest}>
      {children}
    </h4>
  );
};
export { H1, H2, H3, H4 };
