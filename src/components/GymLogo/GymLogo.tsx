/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import gymLogo from '../../images/gymnasium-logo-white.svg';

interface Props {
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
 * `GymLogo` is the standard Gymnasium logo
 */
const GymLogo: React.FunctionComponent<Props> = ({
  width = '200px',
  height = '23px',
  backgroundColor = 'transparent',
}: Props): React.ReactElement => {
  const style = css`
    display: inline-block;
    background-color: ${backgroundColor};
  `;

  return (
    <div css={style}>
      <img
        alt="Aquent Gymnasium"
        srcSet={gymLogo}
        src={gymLogo}
        width={width}
        height={height}
        role="heading"
      />
    </div>
  );
};

export default GymLogo;
