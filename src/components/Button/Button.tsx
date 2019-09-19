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
   * Event fired when this button is clicked
   */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
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
}: Props): React.ReactElement => {
  const style = css`
    font: bold 1.4em/1 ${typeface.text};
    background-color: ${color.orange};
    color: ${color.white};
    border: 0;
    padding: 1em;
    border-radius: 0.125em;
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
    :hover {
      background-color: ${color.grey.light};
    }
  `;

  return (
    <button css={style} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
