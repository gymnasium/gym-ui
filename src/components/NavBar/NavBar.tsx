/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaqueries } from '../../styles';

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
    background-color: ${backgroundColor};
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mediaqueries[0]} {
      flex-direction: row;
      height: ${height};
      justify-content: space-between;
    }
  `;

  const navStyle = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    width: 100%;
    ${mediaqueries[0]} {
      width: fit-content;
    }
    > * {
      margin: 0.25rem 1.25rem;
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
