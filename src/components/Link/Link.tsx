/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const baseStyle = css`
  text-decoration: none;
  color: ${color.orange};
  background-color: transparent;
  font-family: ${typeface.text};
  :hover {
    text-decoration: none;
    border-bottom: 1px solid;
  }
`;

const darkStyle = css`
  transition: all 0.1s linear 0s;
  color: ${color.grey[800]};
  :hover {
    border-bottom: 0;
    color: ${color.orange};
  }
`;

const lightStyle = css`
  transition: all 0.1s linear 0s;
  color: ${color.grey.lightPageBackground};
  :hover {
    border: 0;
    color: ${color.orange};
  }
`;

interface Props {
  /**
   * The content to render within this link.
   */
  children: React.ReactNode;
  /**
   * A passthrough to the anchor tag's href property. Accepts a URL string or javascript().
   */
  to: string;
  /**
   * Set to true to render this link with dark text and an orange hover color.
   */
  isDark?: boolean;
  /**
   * Set to true to render this link with white text and an orange hover color.
   */
  isLight?: boolean;
}

/**
 * `Link` is a wrapper component for stylized anchor tags.
 */
const Link: React.FunctionComponent<
  Props & React.HTMLProps<HTMLButtonElement>
> = ({
  children,
  to,
  isDark = false,
  isLight = false,
  ...rest
}: Props): React.ReactElement => (
  /* eslint-disable react/jsx-props-no-spreading */
  <a
    css={[baseStyle, isDark && darkStyle, isLight && lightStyle]}
    href={to}
    {...rest}
  >
    {children}
  </a>
  /* eslint-enable react/jsx-props-no-spreading */
);

export default Link;
