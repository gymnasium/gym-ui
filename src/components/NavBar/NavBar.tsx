/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface Props {
  children: React.ReactNode;
  /**
   * Position of navigation links (or other content) inside the `NavBar`
   * Valid values are "left", "right", and "center"
   */
  justifyContent?: 'left' | 'right' | 'center';
}

const alignMap = { left: 'flex-start', right: 'flex-end', center: 'center' };

/**
 * Use `NavBar` as a horizontal container for navigation links
 */
const NavBar: React.FunctionComponent<Props> = ({
  children,
  justifyContent = 'left',
}: Props): React.ReactElement => {
  const style = css`
    display: flex;
    flex-direction: 'row';
    justify-content: ${alignMap[justifyContent]};
    align-items: center;
    padding: 0 1rem;
    font-size: 1rem;
    * {
      margin: 0 1rem;
    }
  `;

  return <div css={style}>{children}</div>;
};

export default NavBar;
