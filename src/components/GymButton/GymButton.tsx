/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

interface Props {
  children?: React.ReactNode;
  fullWidth?: boolean;
  allCaps?: boolean;
  lightBorder?: boolean;
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

const GymButton: React.FunctionComponent<Props> = ({
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

export default GymButton;
