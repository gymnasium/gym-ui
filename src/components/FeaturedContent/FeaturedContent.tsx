/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import { color, typeface } from '../../styles';
import { H2, H3 } from '../Headings';
import Card from '../Card';

interface Props {
  /**
   * Content of the main card area
   */
  children: React.ReactNode;
  /**
   * Card title
   */
  title?: string;
  /**
   * Content of the footer area of the card
   */
  footer: React.ReactNode;
  /**
   * Extra content to show up under the card main border
   */
  extra?: React.ReactNode;
  /**
   * Background color - typically match the background of the image in the card content
   */
  backgroundColor?: string;
  /**
   * The title will be more prominent with distinct size and background color
   */
  strongHeader?: boolean;
}

const FeaturedContent: React.FunctionComponent<Props> = ({
  children,
  title = undefined,
  footer,
  extra,
  backgroundColor = color.red,
  strongHeader = false,
}: Props): React.ReactElement => {
  const headerStyle = css`
    padding: 0.01rem 1rem;
    color: ${strongHeader ? color.grey.dark : color.white};
    background-color: ${strongHeader ? `transparent` : backgroundColor};
    text-transform: ${strongHeader && 'uppercase'};
    font-family: ${typeface.title};
  `;

  const mainStyle = css`
    background-color: ${backgroundColor};
    padding: 0 1rem 1rem 1rem;
    color: ${color.white};
  `;

  const footerStyle = css`
    padding: 1rem 1rem;
    font-family: ${typeface.text};
    color: ${color.grey.dark};
  `;

  const extraStyle = css`
    background-color: transparent;
    padding: 1.5rem 1rem 1rem 1rem;
    text-align: center;
  `;

  return (
    <Fragment>
      <Card isVertical isRounded css={mainStyle}>
        {title && (
          <header css={headerStyle}>
            {strongHeader ? <H2>{title}</H2> : <H3>{title}</H3>}
          </header>
        )}
        <section css={mainStyle}>{children}</section>
        {footer && <footer css={footerStyle}>{footer}</footer>}
      </Card>
      {extra && <article css={extraStyle}>{extra}</article>}
    </Fragment>
  );
};

export default FeaturedContent;
