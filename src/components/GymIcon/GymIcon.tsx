/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from '../Link';

const style = css`
  filter: grayscale(1);
  :hover {
    filter: grayscale(0);
  }
`;

interface Props {
  /**
   * Icon name will appear as the link alt text
   */
  name: string;
  /**
   * src is the URL of the icon image
   */
  src: string;
  /**
   * href is the target URL when the icon is clicked
   */
  href: string;
}

const GymIcon: React.FunctionComponent<Props> = ({
  name,
  src,
  href,
}: Props): React.ReactElement => {
  return (
    <Link css={style} isLight to={href}>
      <img src={src} alt={name} />
    </Link>
  );
};

export default GymIcon;
