/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../colors';
// import classes from './Link.module.css';

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

interface LinkProps {
  children: React.ReactChild;
  to?: string;
  dark?: boolean;
}

const Link = ({
  children,
  to = '#',
  dark = false,
}: LinkProps): React.ReactElement => (
  <a css={dark ? styleDark : styleLight} href={to}>
    {children}
  </a>
);

export default Link;
