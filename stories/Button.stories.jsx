import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button/Button';

storiesOf('Button', module).addWithJSX('from stories folder', () => <Button />);
