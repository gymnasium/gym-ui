import React from 'react';

import { CourseNavigation } from '../src';
import { color } from '../src/styles';

export default {
  title: 'Gym UI|CourseNavigation',

  parameters: {
    component: CourseNavigation,
  },
};

export const courseWithSyllabusActive = (): React.ReactElement => (
  <CourseNavigation
    title="Introducing Sketch for UX and UI"
    colorCode={color.teal}
    menuLinks={[
      { name: 'Lessons', url: '/lessons-1122' },
      { name: 'Syllabus', url: '/syllabus-1122', isActive: true },
      { name: 'Instructor', url: '/instructor-7' },
    ]}
  />
);

courseWithSyllabusActive.story = {
  name: 'course with syllabus active',
};

export const catalog = (): React.ReactElement => (
  <CourseNavigation
    title="Catalog"
    menuLinks={[
      { name: 'Full Courses', url: '/full-courses' },
      { name: 'Gym Shorts', url: '/gym-shorts' },
    ]}
  />
);
