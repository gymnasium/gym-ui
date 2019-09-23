/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../styles';

interface Props {
  children: React.ReactNode;
  /**
   * Position of navigation links (or other content) inside the `NavBar`
   * Valid values are "left", "right", and "center"
   */
  justifyContent?: 'left' | 'right' | 'center';
  /**
   * Set the backgound color of the `NavBar`
   */
  backgroundColor: string;
}

const alignMap = { left: 'flex-start', right: 'flex-end', center: 'center' };

/**
 * Use `NavBar` as a horizontal container for navigation links
 */
const NavBar: React.FunctionComponent<Props> = ({
  children,
  justifyContent = 'left',
  backgroundColor = color.black,
}: Props): React.ReactElement => {
  const style = css`
    background-color: ${backgroundColor};
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
