import { addDecorator, configure, setAddon } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

const loaderFn = () => {
  const allExports = [require('../stories/intro.stories.mdx')];
  const req = require.context('../stories', true, /\.stories\.(js|tsx|mdx)$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
