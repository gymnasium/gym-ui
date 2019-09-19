/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import { color, typeface } from '../../styles';
import { H2, H3 } from '../Headings';

interface Props {
  children: React.ReactNode;
  title: string;
  footer: React.ReactNode;
  extra: React.ReactNode;
  backgroundColor?: string;
  strongHeader?: boolean;
}

const FeaturedContent: React.FunctionComponent<Props> = ({
  children,
  title,
  footer,
  extra,
  backgroundColor = color.red,
  strongHeader = true,
}: Props): React.ReactElement => {
  const extraStyle = css`
    background-color: transparent;
    padding: 1rem;
    text-align: center;
  `;

  const mainStyle = css`
    border: 1px solid ${color.grey.regular};
    border-radius: 3px;
    background-color: ${color.white};
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
