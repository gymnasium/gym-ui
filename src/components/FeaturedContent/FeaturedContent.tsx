/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import { color, typeface } from '../../styles';
import { H2, H3 } from '../Headings';

interface Props {
  /**
   * Content of the main card area
   */
  children: React.ReactNode;
  /**
   * Card title
   */
  title: string;
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
  title,
  footer,
  extra,
  backgroundColor = color.red,
  strongHeader = false,
}: Props): React.ReactElement => {
  const extraStyle = css`
    background-color: transparent;
    padding: 1.5rem 1rem 1rem 1rem;
    text-align: center;
  `;

  const mainStyle = css`
    border: 1px solid ${color.grey.regular};
    border-radius: 3px;
    background-color: ${color.white};
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.4;
    header {
      padding: 0.01rem 1rem;
      color: ${strongHeader ? color.grey.dark : color.white};
      background-color: ${strongHeader ? color.white : backgroundColor};
      text-transform: ${strongHeader && 'uppercase'};
      font-family: ${typeface.title};
    }

    section {
      background-color: ${backgroundColor};
      padding: 0 1rem 1rem 1rem;
      color: ${color.white};
      font-family: ${typeface.text};
    }

    footer {
      padding: 1rem 1rem;
      font-family: ${typeface.text};
      color: ${color.grey.dark};
    }
  `;

  return (
    <Fragment>
      <article css={mainStyle}>
        <header>{strongHeader ? <H2>{title}</H2> : <H3>{title}</H3>}</header>
        <section>{children}</section>
        {footer && <footer>{footer}</footer>}
      </article>
      {extra && <article css={extraStyle}>{extra}</article>}
    </Fragment>
  );
};

export default FeaturedContent;
