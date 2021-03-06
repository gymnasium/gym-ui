/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../styles';

interface Props {
  /**
   * Main content
   */
  children: React.ReactNode;
  /**
   * Column number containing the main content
   */
  mainColumnOrRow?: number;
  /**
   * Rounded corners
   */
  isRounded?: boolean;
  /**
   * Vertical Layout
   */
  isVertical?: boolean;
  /**
   * Show dashed separator line between parts
   */
  showSeparators?: boolean;
}

const Card: React.FunctionComponent<Props> = ({
  children,
  mainColumnOrRow = 1,
  isRounded = false,
  isVertical = false,
  showSeparators = false,
}: Props): React.ReactElement => {
  const style = css`
    background-color: ${color.white};
    border: 1px solid ${color.grey.regular};
    border-radius: ${isRounded && `3px`};

    display: flex;
    flex-direction: ${isVertical ? `column` : `row`};
    justify-content: space-between;

    /* Padding */
    /* > * {
      padding-left: 1rem;
      padding-right: 1rem;
    } */
    /* Grow the main column */
    > *:nth-of-type(${mainColumnOrRow}) {
      flex-grow: 1;
    }
    /* Separator */
    > *:not(:first-child) {
      border-left: ${showSeparators &&
      !isVertical &&
      `2px dashed ${color.grey.lightPageBackground}`};
      border-top: ${showSeparators &&
      isVertical &&
      `2px dashed ${color.grey.lightPageBackground}`};
    }
  `;

  return <div css={style}>{children}</div>;
};

export default Card;
