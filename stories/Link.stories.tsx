import React from 'react';

import { Link } from '../src';
import { color } from '../src/styles';

export default {
  title: 'Gym UI|Link',

  parameters: {
    component: Link,
  },
};

export const defaultStory = (): React.ReactElement => (
  <>
    <Link to="/">This is the default link on a light background</Link>
    <br />
    <br />
    <div style={{ backgroundColor: color.black }}>
      <br />
      <Link to="/"> This is the default link on a dark background</Link>
      <br />
      <br />
    </div>
  </>
);

defaultStory.story = {
  name: 'default',
};

export const dark = (): React.ReactElement => (
  <>
    <div style={{ backgroundColor: color.white }}>
      <Link to="/" isDark>
        This is a dark link
      </Link>
    </div>
  </>
);

export const light = (): React.ReactElement => (
  <>
    <div style={{ backgroundColor: color.black }}>
      <br />
      <br />
      <Link to="/" isLight>
        This is a light link
      </Link>
      <br />
      <br />
    </div>
  </>
);

export const withTargetAndTitle = (): React.ReactElement => (
  <Link target="_blank" to="/" title="Go home">
    This link opens a new tab or window
  </Link>
);

withTargetAndTitle.story = {
  name: 'with target and title',
};

export const withRelAttributeEGNoopenerNoreferrer = (): React.ReactElement => (
  <Link to="/" rel="noopener noreferrer">
    This link includes rel=&quot;noopener noreferrer&quot;
  </Link>
);

withRelAttributeEGNoopenerNoreferrer.story = {
  name: 'with rel attribute e.g. noopener noreferrer',
};
