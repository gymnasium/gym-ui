import React from 'react';

import { storiesOf } from '@storybook/react';

import { FeaturedContent } from '../src';
import { typeface, color } from '../src/styles';

storiesOf('FeaturedContent', module).addWithJSX(
  'example',
  (): React.ReactElement => (
    <div style={{ width: '350px' }}>
      <FeaturedContent title="web design & development">ZZZ</FeaturedContent>
    </div>
  )
);
