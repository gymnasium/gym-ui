import React from 'react';

import { Card } from '../src';
import { typeface, color } from '../src/styles';

export default {
  title: 'Card',

  parameters: {
    component: Card,

    backgrounds: [
      {
        name: 'Light grey background',
        value: color.grey.lightPageBackground,
        default: true,
      },
    ],
  },
};

export const withSimpleContent = (): React.ReactElement => (
  <Card>
    <div>
      <p>Hi</p>
      <p style={{ backgroundColor: color.teal }}>
        Full width content is possible
      </p>
    </div>
  </Card>
);

withSimpleContent.story = {
  name: 'with simple content',
};

export const withRoundedConrners = (): React.ReactElement => (
  <Card isRounded>
    <div>
      <p>Hi</p>
      <p>rounded corners</p>
    </div>
  </Card>
);

withRoundedConrners.story = {
  name: 'with rounded conrners',
};

export const withColumns = (): React.ReactElement => (
  <Card mainColumnOrRow={2}>
    <div style={{ width: '150px' }}>
      <p style={{ backgroundColor: color.teal }}>Hello there!</p>
      <p>Left column here</p>
    </div>
    <div>
      <p>Hi</p>
      <p>Main content section</p>
      <p>You should see columns on the left and right</p>
      <p style={{ backgroundColor: color.teal }}>
        This section takes all possible width
      </p>
      <p>More content</p>
      <p>More content</p>
      <p>More content</p>
    </div>
    <div style={{ width: '100px' }}>
      <p style={{ backgroundColor: color.teal }}>Right column content</p>
      <p>more content</p>
    </div>
  </Card>
);

withColumns.story = {
  name: 'with columns',
};

export const withRows = (): React.ReactElement => (
  <Card isVertical mainRow={2}>
    <div style={{ height: '100px' }}>
      <p style={{ backgroundColor: color.teal }}>Hello there!</p>
      <p>Top section</p>
    </div>
    <div style={{ backgroundColor: color.grey[100] }}>
      <p>Hi</p>
      <p>Main content section</p>
      <p>You should see sections to the top and bottom</p>
      <p>This section takes all possible height</p>
      <p>More content</p>
      <p>More content</p>
      <p>More content</p>
    </div>
    <div>
      <p style={{ backgroundColor: color.teal }}>third section</p>
      <p>more content</p>
    </div>
  </Card>
);

withRows.story = {
  name: 'with rows',
};

export const withColumnsAndSeparators = (): React.ReactElement => (
  <Card showSeparators mainColumnOrRow={2}>
    <div style={{ width: '150px' }}>
      <p style={{ backgroundColor: color.teal }}>Hello there!</p>
      <p>Left column here</p>
    </div>
    <div>
      <p>Hi</p>
      <p>Main content section</p>
      <p>You should see columns on the left and right</p>
      <p style={{ backgroundColor: color.teal }}>
        This section takes all possible width
      </p>
      <p>More content</p>
      <p>More content</p>
      <p>More content</p>
    </div>
    <div style={{ width: '100px' }}>
      <p style={{ backgroundColor: color.teal }}>Right column content</p>
      <p>more content</p>
    </div>
  </Card>
);

withColumnsAndSeparators.story = {
  name: 'with columns and separators',
};
