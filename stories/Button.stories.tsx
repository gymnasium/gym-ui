import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from '../src';
import { color } from '../src/styles';

const onClickAction = action('Button clicked');

export default {
  title: 'Gym UI|Components/Button',

  parameters: {
    component: Button,
    componentSubtitle: `Gymnasium's branded, hoverable, clickable button`,
  },
};

export const summary = (): React.ReactElement => (
  <>
    <Button onClick={onClickAction}>Default</Button>
    <Button allCaps onClick={onClickAction}>
      all caps
    </Button>
    <div
      style={{
        backgroundColor: color.black,
        padding: '1rem',
        margin: '1rem 0',
      }}
    >
      <Button lightBorder onClick={onClickAction}>
        Light Border
      </Button>
    </div>
    <Button fullWidth onClick={onClickAction}>
      Full Width
    </Button>
    <Button to="/">Link</Button>
  </>
);

summary.story = {
  name: 'Summary',
};

export const defaultStory = (): React.ReactElement => (
  <Button onClick={onClickAction}>Default</Button>
);

defaultStory.story = {
  name: 'default',
};

export const fullWidth = (): React.ReactElement => (
  <Button fullWidth onClick={onClickAction}>
    Full Width
  </Button>
);

fullWidth.story = {
  name: 'full width',
};

export const allCaps = (): React.ReactElement => (
  <Button allCaps onClick={onClickAction}>
    all caps
  </Button>
);

allCaps.story = {
  name: 'all caps',
};

export const lightBorderOnADarkBackground = (): React.ReactElement => (
  <div
    style={{
      backgroundColor: color.black,
      padding: '1rem',
      margin: '1rem 0',
    }}
  >
    <Button lightBorder onClick={onClickAction}>
      Light Border
    </Button>
  </div>
);

lightBorderOnADarkBackground.story = {
  name: 'light border on a dark background',
};

export const hyperlink = (): React.ReactElement => <Button to="/">Link</Button>;
