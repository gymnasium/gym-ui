import React from 'react';

import { storiesOf } from '@storybook/react';

import { FeaturedContent, Link, Separator, Button } from '../src';
import { typeface, color } from '../src/styles';

storiesOf('FeaturedContent', module)
  .addParameters({
    component: FeaturedContent,
    backgrounds: [
      {
        name: 'Light grey background',
        value: color.grey.lightPageBackground,
        default: true,
      },
    ],
  })
  .addWithJSX(
    'example',
    (): React.ReactElement => {
      const footerContent = (
        <>
          <strong>with Brad Frost</strong>
          <br />
          Web Designer &amp; Speaker
          <Separator />
          <div className="card-cta">
            <Button to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about">
              Learn More
            </Button>
          </div>
        </>
      );

      const extraContent = (
        <Link isDark href="#courses">
          <b>View More Courses</b>
        </Link>
      );

      return (
        <div style={{ width: '350px' }}>
          <FeaturedContent
            title="web design & development"
            footer={footerContent}
            extra={extraContent}
          >
            <div className="mask">
              <Link
                isLight
                to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
                title="Learn More"
              >
                <img
                  alt="Modern Web Design"
                  srcSet="https://gymcms.xyz/img/course-artwork/svg/gym-107.svg"
                  src="https://thegymnasium.com/c4x/GYM/107/asset/gym-107.png"
                  width="256"
                />
                <h2>Modern web design</h2>
                <p>
                  A beginner’s guide to front-end development covering HTML,
                  CSS, and JavaScript.
                </p>
              </Link>
            </div>
          </FeaturedContent>
        </div>
      );
    }
  );
