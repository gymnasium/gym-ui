/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../styles';

interface Props {
  children: React.ReactNode;
  mainColumn?: number;
}

const Card: React.FunctionComponent<Props> = ({
  children,
  mainColumn = 1,
}: Props): React.ReactElement => {
  const style = css`
    background-color: ${color.white};
    border: 10px solid ${color.grey.lightPageBackground};
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* Padding */
    > * {
      /* margin-left: 0.5rem; */
      padding-left: 0.5rem;
      /* margin-right: 0.5rem; */
      padding-right: 0.5rem;
    }
    /* Grow the main column */
    > *:nth-child(${mainColumn}) {
      flex-grow: 1;
    }
    /* Separator */
    > *:not(:first-child) {
      border-left: 2px dashed ${color.grey.lightPageBackground};
    }
  `;

  return <div css={style}>{children}</div>;
};

export default Card;
