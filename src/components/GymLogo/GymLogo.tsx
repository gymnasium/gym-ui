/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface Props {
  /**
   * The image URL
   */
  src: string;
  /**
   * Logo width override
   */
  width?: string;
  /**
   * Logo height override
   */
  height?: string;
  /**
   * Background color override
   */
  backgroundColor?: string;
}

/**
 * The standard Gymnasium logo
 */
const GymLogo: React.FunctionComponent<Props> = ({
  src,
  width = '200px',
  height = '23px',
  backgroundColor = 'transparent',
}: Props): React.ReactElement => {
  const style = css`
    display: inline-block;
    background-color: ${backgroundColor};
    height: ${height};
  `;

  return (
    <div css={style}>
      <img
        alt="Aquent Gymnasium"
        src={src}
        width={width}
        height={height}
        role="heading"
      />
    </div>
  );
};

export default GymLogo;
