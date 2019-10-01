import React from 'react';

import { LinkWithImage, H2, Button } from '../src';
import { color } from '../src/styles';

export default {
  title: 'Gym UI|LinkWithImage',

  parameters: {
    component: LinkWithImage,
  },
};

export const defaultStory = (): React.ReactElement => (
  <div>
    <H2>UX Courses</H2>
    <br />
    <br />
    <LinkWithImage
      to="https://thegymnasium.com/courses/GYM/103/0/about"
      title="Get Started"
      imageAlt="UX Fundamentals"
      imageSrcSet="https://gymcms.xyz/img/course-artwork/svg/gym-103.svg"
      imageSrc="https://gymcms.xyz/img/course-artwork/png/gym-103.png"
      imageBackgroundColor={color.teal}
    >
      UX Fundamentals
    </LinkWithImage>
    <LinkWithImage
      to="https://thegymnasium.com/courses/GYM/105/0/about"
      title="Web &amp; Mobile"
      imageAlt="Web &amp; Mobile"
      imageSrc="https://gymcms.xyz/img/course-artwork/svg/gym-105.svg"
      imageBackgroundColor={color.green}
    >
      Writing for Web &amp; Mobile
    </LinkWithImage>
    <footer>
      <br />
      <br />
      <Button>View more courses</Button>
    </footer>
  </div>
);

defaultStory.story = {
  name: 'default',
};
