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
      padding: 0 1rem;
    }
  `;

  return (
    <article css={style} className="card featured-course user-experience">
      <header>{strongHeader ? <H2>{title}</H2> : <H3>{title}</H3>}</header>

      <section>
        <div className="mask">
          <a
            href="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
            title="Learn More"
          >
            <img
              alt="Modern Web Design"
              srcSet="https://gymcms.xyz/img/course-artwork/svg/gym-107.svg"
              src="https://thegymnasium.com/c4x/GYM/107/asset/gym-107.png"
              width="256"
            />
          </a>
        </div>
        <h2>
          <a
            href="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
            title="Learn More"
          >
            Working With Atomic Design and Pattern Lab
          </a>
        </h2>
        <p>
          An in-depth look at building successful UI design systems from the
          author of <cite>Atomic Design</cite>.
        </p>
      </section>
      <div className="card-footer">
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
      </div>
    </article>
  );
};

export default FeaturedContent;
