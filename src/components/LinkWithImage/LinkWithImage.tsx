/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from '../Link';
import { H3 } from '../Headings';

const baseStyle = css`
  > * {
    vertical-align: middle;
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
  /** Link title  */
  title?: string;
  /** Link target text attribute */
  target?: string;
  /** Image source URL */
  imageSrc: string;
  /** Image srcset attribute */
  imageSrcSet?: string;
  /** Image alternate text */
  imageAlt?: string;
  /** Image height override */
  imageHeight?: string;
  /** Image backgound color to fill around the image */
  imageBackgroundColor?: string;
}

const LinkWithImage: React.FunctionComponent<Props> = ({
  children,
  to,
  rel = undefined,
  title = undefined,
  target = undefined,
  imageSrc,
  imageSrcSet = undefined,
  imageAlt = undefined,
  imageHeight = '7rem',
  imageBackgroundColor = undefined,
}: Props): React.ReactElement => {
  const imageStyle = css`
    border-radius: 50%;
    height: ${imageHeight};
    width: ${imageHeight};
    background-color: ${imageBackgroundColor};
  `;

  const LinkStyle = css`
    display: inline-block;
    margin-left: 1.5rem;
  `;

  return (
    <div css={baseStyle}>
      <a href={to} rel={rel} target={target} title={title}>
        <img
          css={imageStyle}
          src={imageSrc}
          srcSet={imageSrcSet}
          alt={imageAlt}
        />
      </a>
      <span
        css={css`
          display: inline-block;
        `}
      >
        <H3>
          <Link css={LinkStyle} to={to} rel={rel} target={target} title={title}>
            {children}
          </Link>
        </H3>
      </span>
    </div>
  );
};

export default LinkWithImage;
