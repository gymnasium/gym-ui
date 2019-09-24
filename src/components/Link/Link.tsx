/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const baseStyle = css`
  text-decoration: none;
  color: ${color.orange};
  background-color: transparent;
  font-family: ${typeface.text};
  transition: all 0.1s linear 0s;
  :hover {
    border-bottom: 1px solid;
  }
`;

const darkStyle = css`
  color: ${color.grey[800]};
  :hover {
    border-bottom: 0;
    color: ${color.orange};
  }
`;

const lightStyle = css`
  color: ${color.grey.lightPageBackground};
  :hover {
    border: 0;
    color: ${color.orange};
  }
`;

interface Props {
  children: React.ReactNode;
  to: string;
  isDark?: boolean;
  isLight?: boolean;
  rel?: string;
  title?: string;
  target?: string;
}

const Link: React.FunctionComponent<Props> = ({
  children,
  to,
  isDark = false,
  isLight = false,
  ...rest
}: Props): React.ReactElement => (
  <a
    css={[baseStyle, isDark && darkStyle, isLight && lightStyle]}
    href={to}
    {...rest}
  >
    {children}
  </a>
);

export default Link;
