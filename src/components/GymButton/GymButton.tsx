/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

interface Props {
  children?: React.ReactNode;
  fullWidth?: boolean;
  allCaps?: boolean;
  lightBorder?: boolean;
  to?: string;
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

const GymButton: React.FunctionComponent<Props> = ({
  children = null,
  fullWidth = false,
  allCaps = false,
  lightBorder = false,
  onClick = (): void => {},
  to = undefined,
}: Props): React.ReactElement => {
  const style = css`
    text-decoration: none;
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
    transition: all 0.1s linear 0s;
    :hover {
      background-color: ${color.grey.light};
    }
  `;

  if (to)
    return (
      // Hyperlink
      <a css={style} type="button" href={to}>
        {children}
      </a>
    );

  return (
    // Real button
    <button css={style} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default GymButton;
