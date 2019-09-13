/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../colors';

const styleLight = css`
  text-decoration: none;
  color: ${color.orange};
  font-family: ${typeface.text};
  transition: all 0.1s linear 0s;
  :hover {
    text-decoration: none;
    border-bottom: 1px solid;
  }
`;

const styleDark = css`
  text-decoration: none;
  color: ${color.grey[800]};
  background-color: transparent;
  font-family: ${typeface.title};
  transition: all 0.1s linear 0s;
  :hover {
    text-decoration: none;
    border: 0px;
    color: ${color.orange};
  }
`;

interface Props {
  children: React.ReactNode;
  to: string;
  dark?: boolean;
  rel?: string;
  target?: string;
}

const Link: React.FunctionComponent<Props> = ({
  children,
  to,
  dark = false,
  rel = '',
  target = '',
}: Props): React.ReactElement => (
  <a css={dark ? styleDark : styleLight} href={to} rel={rel} target={target}>
    {children}
  </a>
);

export default Link;
