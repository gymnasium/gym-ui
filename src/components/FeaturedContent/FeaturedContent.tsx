/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import { color, typeface } from '../../styles';
import { H2, H3 } from '../Headings';

interface Props {
  children: React.ReactNode;
  title: string;
  backgroundColor?: string;
  strongHeader?: boolean;
}

const FeaturedContent: React.FunctionComponent<Props> = ({
  children,
  title,
  backgroundColor = color.red,
  strongHeader = false,
}: Props): React.ReactElement => {
  const style = css`
    border: 1px solid ${color.grey.regular};
    border-radius: 3px;

    header {
      padding: 0.01rem 1rem;
      color: ${strongHeader ? color.black : color.white};
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
    }
  `;

  return (
    <article css={style} className="card featured-course user-experience">
      <header>{strongHeader ? <H2>{title}</H2> : <H3>{title}</H3>}</header>

      <section>{children}</section>
      <footer className="card-footer">
        <div className="card-info">
          <dl className="instructor">
            <dt className="byline">
              <b>with Brad Frost</b>
            </dt>
            <dd>Web Designer &amp; Speaker</dd>
          </dl>
        </div>
        <div className="card-cta">
          <a
            className="gym-button"
            href="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
          >
            <b>Learn More</b>
          </a>
        </div>
      </footer>
    </article>
  );
};

export default FeaturedContent;
