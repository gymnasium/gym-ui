import React from 'react';

import { storiesOf } from '@storybook/react';

import { FeaturedContent } from '../src';
import { typeface, color } from '../src/styles';

storiesOf('FeaturedContent', module).addWithJSX(
  'with simple content',
  (): React.ReactElement => (
    <FeaturedContent>
      <div>
        <p>Hi</p>
        <p style={{ backgroundColor: color.teal }}>Full width simple content</p>
      </div>
    </FeaturedContent>
  )
);
