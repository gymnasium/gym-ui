/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

interface Props {
  /**
   * Content to render within the component
   */
  children?: React.ReactNode;
  /**
   * Set to true to make this button span the width of its parent
   */
  fullWidth?: boolean;
  /**
   * Set to true to add a text-transform: uppercase; rule to this button's css
   */
  allCaps?: boolean;
  /**
   * Set to true to give this button a light-colored border
   */
  lightBorder?: boolean;
  /**
   * Callback for event fired when this button is clicked
   */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * URL to set the button as an anchor/hyperlink
   * When used, the button is turned into an anchor element
   * In this case, the onClick callback will not be used
   */
  to?: string;
  /**
   * isSmall flag produces a smaller version of the button
   * intended mainly for navigation bars
   */
  isSmall?: boolean;
}

/**
 * Use `button` for a navigable call to action, or as a trigger for dynamic functionality.
 */
const Button: React.FunctionComponent<Props> = ({
  children = null,
  fullWidth = false,
  allCaps = false,
  lightBorder = false,
  onClick = (): void => {},
  to = undefined,
  isSmall = false,
}: Props): React.ReactElement => {
  const style = css`
    text-decoration: none;
    font: bold 1.2rem/1 ${typeface.text};
    background-color: ${color.orange};
    color: ${color.white};
    border: 0;
    padding: 0.8rem;
    border-radius: 0.1rem;
    box-shadow: none;
    text-shadow: none;
    background-image: none;
    display: inline-block;
    cursor: pointer;
    border: 0;
    text-align: center;
    text-transform: ${allCaps && 'uppercase'};
    width: ${fullWidth && '100%'};
    border: ${lightBorder && `2px solid ${color.white} !important`};
    transition: all 0.1s linear 0s;
    :hover {
      background-color: ${color.grey.light};
    }
  `;

  const smallStyle = css`
    font: bold 0.9rem/1 ${typeface.text};
  `;

  if (to)
    return (
      // Hyperlink
      <a css={[style, isSmall && smallStyle]} type="button" href={to}>
        {children}
      </a>
    );

  return (
    // Real button
    <button
      css={[style, isSmall && smallStyle]}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
