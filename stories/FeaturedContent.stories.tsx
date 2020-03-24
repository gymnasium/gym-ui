import React from 'react';

import { FeaturedContent, Link, Separator, Button, H2, H4 } from '../src';
import { color } from '../src/styles';

export default {
  title: 'Gym UI|Containers/FeaturedContent',

  parameters: {
    component: FeaturedContent,

    backgrounds: [
      {
        name: 'Light grey background',
        value: color.grey.lightPageBackground,
        default: true,
      },
    ],
  },
};

export const withStrongTitleExtraContentColorOverride = (): React.ReactElement => {
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
            src="https://thegymcms.com/img/webinars/featured-webinar/prototyping-as-process-paravel-slide.png"
            width="100%"
          />
          <H2>
            UX Design:
            <br />
            Prototyping
            <br />
            as Process
          </H2>
        </div>
      </FeaturedContent>
    </div>
  );
};

withStrongTitleExtraContentColorOverride.story = {
  name: 'with strong title, extra content, color override',
};

export const withNormalTitleAndNoExtra = (): React.ReactElement => {
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
      <FeaturedContent title="web design & development" footer={footerContent}>
        <div className="mask">
          <Link
            isLight
            to="https://thegymnasium.com/courses/course-v1:GYM+014+0/about"
            title="Learn More"
          >
            <div style={{ textAlign: 'center' }}>
              <img
                alt="Modern Web Design"
                srcSet="https://thegymcms.com/img/course-artwork/svg/gym-107.svg"
                src="https://thegymnasium.com/c4x/GYM/107/asset/gym-107.png"
                width="256"
              />
            </div>
            <H2>Modern web design</H2>
            <H4>
              A beginner’s guide to front-end development covering HTML, CSS,
              and JavaScript.
            </H4>
          </Link>
        </div>
      </FeaturedContent>
    </div>
  );
};

withNormalTitleAndNoExtra.story = {
  name: 'with normal title and no extra',
};
