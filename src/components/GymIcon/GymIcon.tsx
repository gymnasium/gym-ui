/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import aquentIcon from '../../images/aquent-icon.56d05be37e9a.png';
import vitaminTIcon from '../../images/vitamin-t-icon.32e5d567b8ca.png';
import Link from '../Link';

const icons = [
  { name: 'Aquent Icon', src: aquentIcon, href: 'https://www.aquent.com' },
  {
    name: 'Vitamin T Icon',
    src: vitaminTIcon,
    href: 'https://vitamintalent.com/',
  },
];
const style = css`
  filter: grayscale(1);
  :hover {
    filter: grayscale(0);
  }
`;

interface Props {
  /**
   * Predefined icon index:
   * 0 for Aquent,
   * 1 for Vitamin T
   */
  iconIndex: number;
}

const GymIcon: React.FunctionComponent<Props> = ({
  iconIndex,
}: Props): React.ReactElement => {
  return (
    <Link css={style} isLight to={icons[iconIndex].href}>
      <img src={icons[iconIndex].src} alt={icons[iconIndex].name} />
    </Link>
  );
};

export default GymIcon;
