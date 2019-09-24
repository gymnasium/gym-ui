/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Separator: React.FunctionComponent = (): React.ReactElement => {
  const style = css`
    margin: 1rem 0;
    border-bottom: 1px dashed #444;
  `;

  return <div css={style} />;
};

export default Separator;
