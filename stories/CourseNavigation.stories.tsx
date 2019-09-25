import React from 'react';

import { storiesOf } from '@storybook/react';

import { CourseNavigation } from '../src';
import { color } from '../src/styles';

storiesOf('CourseNavigation', module)
  .addParameters({
    component: CourseNavigation,
  })
  .addWithJSX(
    'course with syllabus active',
    (): React.ReactElement => (
      <CourseNavigation
        title="Introducing Sketch for UX and UI"
        colorCode={color.teal}
        menuLinks={[
          { name: 'Lessons', url: '/lessons-1122' },
          { name: 'Syllabus', url: '/syllabus-1122', isActive: true },
          { name: 'Instructor', url: '/instructor-7' },
        ]}
      />
    )
  )
  .addWithJSX(
    'catalog',
    (): React.ReactElement => (
      <CourseNavigation
        title="Catalog"
        menuLinks={[
          { name: 'Full Courses', url: '/full-courses' },
          { name: 'Gym Shorts', url: '/gym-shorts' },
        ]}
      />
    )
  );
