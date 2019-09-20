/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';
import Link from '../Link';

const baseStyle = css`
  text-decoration: none;
  color: ${color.orange};
  background-color: transparent;
  font-family: ${typeface.text};
  transition: all 0.1s linear 0s;
  :hover {
    border-bottom: 1px solid;
  }
`;

const darkStyle = css`
  color: ${color.grey[800]};
  :hover {
    border-bottom: 0;
    color: ${color.orange};
  }
`;

const lightStyle = css`
  color: ${color.grey.lightPageBackground};
  :hover {
    border: 0;
    color: ${color.orange};
  }
`;

interface Props {
  /**
   * Link text or markup
   */
  children: React.ReactNode;
  /** Link URL */
  to: string;
  /** Link rel attribute */
  rel?: string;
  /** Link target text attribute */
  target?: string;
  /** Image source URL */
  imageSrc: string;
  /** Image srcset attribute */
  imageSrcSet?: string;
  /** Image alternate text */
  imageAlt?: string;
  /** Image width */
  imageWidth?: string;
  /** Image Height */
  imageHeight?: string;
}

const LinkWithImage: React.FunctionComponent<Props> = ({
  children,
  to,
  rel = undefined,
  target = undefined,
  imageSrc,
  imageSrcSet = undefined,
  imageAlt = undefined,
  imageWidth = undefined,
  imageHeight = undefined,
}: Props): React.ReactElement => (
  <Link to={to} rel={rel} target={target}>
    <img
      src={imageSrc}
      srcSet={imageSrcSet}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
    />
    {children}
  </Link>
);

export default LinkWithImage;
