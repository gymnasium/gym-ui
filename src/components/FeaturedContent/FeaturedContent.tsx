/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../../styles';

interface Props {
  children: React.ReactNode;
  mainColumn?: number;
}

const FeaturedContent: React.FunctionComponent<Props> = ({
  children,
}: Props): React.ReactElement => {
  const style = css``;

  return <div css={style}>{children}</div>;
};

export default FeaturedContent;
