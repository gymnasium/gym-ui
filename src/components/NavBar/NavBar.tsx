/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface Props {
  /**
   * NavBar content that is left aligned
   */
  leftContent?: React.ReactNode;
  /**
   * NavBar content that is right aligned
   */
  rightContent?: React.ReactNode;
  /**
   * Set the backgound color of the `NavBar`
   */
  backgroundColor?: string;
  /** Height Override */
  height?: string;
}

/**
 * Use `NavBar` as a horizontal container for navigation links
 */
const NavBar: React.FunctionComponent<Props> = ({
  leftContent,
  rightContent,
  // justifyContent = 'right',
  backgroundColor = 'transparent',
  height = '4.5rem',
}: Props): React.ReactElement => {
  const baseStyle = css`
    height: ${height};
    background-color: ${backgroundColor};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `;

  const navStyle = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    width: fit-content;
    > * {
      margin: 0 1.25rem;
    }
  `;

  const leftStyle = css`
    justify-content: flex-start;
  `;
  const rightStyle = css`
    justify-content: flex-end;
  `;

  return (
    <div css={baseStyle}>
      <div css={[navStyle, leftStyle]}>{leftContent}</div>
      <div css={[navStyle, rightStyle]}>{rightContent}</div>
    </div>
  );
};

export default NavBar;
