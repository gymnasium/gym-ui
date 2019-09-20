import React from 'react';

import { storiesOf } from '@storybook/react';

import { LinkWithImage, H2, Button } from '../src';
import { color } from '../src/styles';

storiesOf('LinkWithImage', module)
  .addParameters({
    component: LinkWithImage,
  })
  .addWithJSX(
    'default',
    (): React.ReactElement => (
      <div>
        <H2>UX Courses</H2>
        <br />
        <br />
        <LinkWithImage
          to="https://thegymnasium.com/courses/GYM/103/0/about"
          title="Get Started"
          alt="UX Fundamentals"
          imageSrcSet="https://gymcms.xyz/img/course-artwork/svg/gym-103.svg"
          imageSrc="https://gymcms.xyz/img/course-artwork/png/gym-103.png"
        >
          UX Fundamentals
        </LinkWithImage>

        <footer>
          <br />
          <br />
          <Button>View more courses</Button>
        </footer>
      </div>
    )
  );
