/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../colors';
// import classes from './Link.module.css';

const style = css`
  text-decoration: none;
  color: ${color.orange};
  :hover {
    text-decoration: none;
    border-bottom: 1px solid;
  }
`;

interface LinkProps {
  children: React.ReactChild;
  to?: string;
}

const Link = ({ children, to = '#' }: LinkProps): React.ReactElement => (
  <a css={style} href={to}>
    {children}
  </a>
);

export default Link;
