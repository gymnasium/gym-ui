import React from 'react';

import { storiesOf } from '@storybook/react';

import { FeaturedContent, Link } from '../src';
import { typeface, color } from '../src/styles';

storiesOf('FeaturedContent', module).addWithJSX(
  'example',
  (): React.ReactElement => (
    <div style={{ width: '350px' }}>
      <FeaturedContent title="web design & development">
        <div className="mask">
          <Link
            to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
            title="Learn More"
          >
            <img
              alt="Modern Web Design"
              srcSet="https://gymcms.xyz/img/course-artwork/svg/gym-107.svg"
              src="https://thegymnasium.com/c4x/GYM/107/asset/gym-107.png"
              width="256"
            />
          </Link>
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
      </FeaturedContent>
    </div>
  )
);
