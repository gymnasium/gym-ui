import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  PrimaryNavigation,
  SecondaryNavigation,
  CourseNavigation,
} from '../src';
import { color } from '../src/styles';

storiesOf('Combined Navigation Demo', module)
  .addWithJSX(
    'primary, secondary and course navigation (logged in)',
    (): React.ReactElement => (
      <>
        <PrimaryNavigation isLoggedIn logoutUrl="/logout" userId="Ali" />
        <SecondaryNavigation isLoggedIn />
        <CourseNavigation
          title="Introducing Sketch for UX and UI"
          colorCode={color.teal}
          menuLinks={[
            { name: 'Lessons', url: '/lessons-1122' },
            { name: 'Syllabus', url: '/syllabus-1122', isActive: true },
            { name: 'Instructor', url: '/instructor-7' },
          ]}
        />
      </>
    )
  )
  .addWithJSX(
    'primary, secondary and catalog navigation (logged out)',
    (): React.ReactElement => (
      <>
        {' '}
        <PrimaryNavigation />
        <SecondaryNavigation />
        <CourseNavigation
          title="Catalog"
          menuLinks={[
            { name: 'Full Courses', url: '/full-courses' },
            { name: 'Gym Shorts', url: '/gym-shorts' },
          ]}
        />
      </>
    )
  );
