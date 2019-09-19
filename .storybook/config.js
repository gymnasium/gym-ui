import { addDecorator, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';

setAddon(JSXAddon);

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);
const req2 = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
