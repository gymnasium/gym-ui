import { addDecorator, configure, setAddon } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
configure(require.context('../stories', true, /\.stories\.(js|tsx)$/), module);
