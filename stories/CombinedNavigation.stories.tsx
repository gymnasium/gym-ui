import React from 'react';

import {
  PrimaryNavigation,
  SecondaryNavigation,
  CourseNavigation,
} from '../src';
import { color } from '../src/styles';

export default {
  title: 'Combined Navigation Demo',
};

export const primarySecondaryAndCourseNavigationLoggedIn = (): React.ReactElement => (
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
);

primarySecondaryAndCourseNavigationLoggedIn.story = {
  name: 'primary, secondary and course navigation (logged in)',
};

export const primarySecondaryAndCatalogNavigationLoggedOut = (): React.ReactElement => (
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
);

primarySecondaryAndCatalogNavigationLoggedOut.story = {
  name: 'primary, secondary and catalog navigation (logged out)',
};
