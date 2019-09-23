/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../styles';
import GymLogo from '../GymLogo';

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
  /** Height Override */
  height?: string;
  /** Display Gymnasium Logo
   * To display, use `left` or `right`
   * To hide, don't specify this prop or use `no`
   */
  displayLogo?: 'left' | 'right' | 'no';
}

const alignMap = { left: 'flex-start', right: 'flex-end', center: 'center' };

/**
 * Use `NavBar` as a horizontal container for navigation links
 */
const NavBar: React.FunctionComponent<Props> = ({
  children,
  justifyContent = 'left',
  backgroundColor = color.black,
  height = '4.5rem',
  displayLogo = 'no',
}: Props): React.ReactElement => {
  const baseStyle = css`
    height: ${height};
    background-color: ${backgroundColor};
    display: flex;
    align-items: center;
    flex-direction: ${displayLogo === 'left' ? 'row-reverse' : 'row'};
    padding: 0 1rem;
  `;

  const navStyle = css`
    display: inline-flex;
    flex-direction: 'row';
    justify-content: ${alignMap[justifyContent]};
    align-items: center;
    font-size: 1rem;
    flex-grow: 1;
    > * {
      margin: 0 1rem;
    }
  `;

  const logoStyle = css`
    display: ${displayLogo === 'no' && `none`};
    margin-left: ${displayLogo === 'right' && `auto`};
    margin-right: ${displayLogo === 'left' && `auto`};
  `;

  return (
    <div css={baseStyle}>
      <div css={navStyle}>{children}</div>
      {displayLogo !== 'no' && (
        <span css={logoStyle}>
          <GymLogo backgroundColor="transparent" />
        </span>
      )}
    </div>
  );
};

export default NavBar;
