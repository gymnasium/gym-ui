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
    'with strong title, extra content, color override',
    (): React.ReactElement => {
      const footerContent = (
        <>
          <div style={{ textAlign: 'center' }}>
            <Button to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about">
              Watch Now
            </Button>
          </div>
        </>
      );

      const extraContent = (
        <Link isDark to="#courses">
          <b>View More Webinars</b>
        </Link>
      );

      return (
        <div style={{ width: '350px' }}>
          <FeaturedContent
            title="Webinars"
            footer={footerContent}
            extra={extraContent}
            backgroundColor="#000"
            strongHeader
          >
            <div className="card-main equal-h">
              <img
                alt="Erin Young of UX Slide"
                src="https://gymcms.xyz/img/webinars/featured-webinar/prototyping-as-process-paravel-slide.png"
                width="100%"
              />
              <h3 className="all-caps">
                UX Design: Prototyping
                <span className="no-wrap">as Process</span>
              </h3>
            </div>
          </FeaturedContent>
        </div>
      );
    }
  )
  .addWithJSX(
    'with normal title and no extra',
    (): React.ReactElement => {
      const footerContent = (
        <>
          <strong>with Aaron Gustafson</strong>
          <br />
          of Microsoft
          <Separator />
          <div style={{ textAlign: 'center' }}>
            <Button to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about">
              Learn More
            </Button>
          </div>
        </>
      );

      return (
        <div style={{ width: '350px' }}>
          <FeaturedContent
            title="web design & development"
            footer={footerContent}
          >
            <div className="mask">
              <Link
                isLight
                to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
                title="Learn More"
              >
                <div style={{ textAlign: 'center' }}>
                  <img
                    alt="Modern Web Design"
                    srcSet="https://gymcms.xyz/img/course-artwork/svg/gym-107.svg"
                    src="https://thegymnasium.com/c4x/GYM/107/asset/gym-107.png"
                    width="256"
                  />
                </div>
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
