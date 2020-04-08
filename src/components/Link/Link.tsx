/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const baseStyle = css`
  text-decoration: none;
  color: ${color.blue};
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
    color: ${color.blue};
  }
`;

const lightStyle = css`
  color: ${color.orange};
  :hover {
    border: 0;
    text-decoration: underline;
  }
`;

const activeStyle = css`
  color: ${color.blue};
`;

interface Props {
  children: React.ReactNode;
  to: string;
  isDark?: boolean;
  isLight?: boolean;
  rel?: string;
  title?: string;
  target?: string;
  /**
   * Use isActive when the link needs to be highlighted
   * for example if used as a navigation link and showing the selected page
   */
  isActive?: boolean;
}

const Link: React.FunctionComponent<Props> = ({
  children,
  to,
  isDark = false,
  isLight = false,
  isActive = false,
  ...rest
}: Props): React.ReactElement => (
  /* eslint-disable react/jsx-props-no-spreading */
  <a
    css={[
      baseStyle,
      isDark && darkStyle,
      isLight && lightStyle,
      isActive && activeStyle,
    ]}
    href={to}
    {...rest}
  >
    {children}
  </a>
  /* eslint-enable react/jsx-props-no-spreading */
);

export default Link;
