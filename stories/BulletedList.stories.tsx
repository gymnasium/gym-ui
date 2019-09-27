import React from 'react';

import { BulletedList, BulletedListItem } from '../src';

export default {
  title: 'BulletedList',

  parameters: {
    component: BulletedList,
  },
};

export const withTitle = (): React.ReactElement => {
  const title = 'Skills covered';
  return (
    <BulletedList title={title}>
      <BulletedListItem>HTML basics</BulletedListItem>
      <BulletedListItem>CSS basics</BulletedListItem>
      <BulletedListItem>Bootstrap basics</BulletedListItem>
      <BulletedListItem>And more...</BulletedListItem>
    </BulletedList>
  );
};

withTitle.story = {
  name: 'with title',
};

export const withoutTitle = (): React.ReactElement => (
  <BulletedList>
    <BulletedListItem>HTML basics</BulletedListItem>
    <BulletedListItem>CSS basics</BulletedListItem>
    <BulletedListItem>Bootstrap basics</BulletedListItem>
    <BulletedListItem>And more...</BulletedListItem>
  </BulletedList>
);

withoutTitle.story = {
  name: 'without title',
};

export const withInternalMarkup = (): React.ReactElement => (
  <BulletedList>
    <BulletedListItem>Some content Here</BulletedListItem>
    <BulletedListItem>
      with <em>any</em> amount of markup added should <u>render</u>
    </BulletedListItem>
    <BulletedListItem>
      <p>even with a few block type elements</p>
      <p>within</p>
    </BulletedListItem>
  </BulletedList>
);

withInternalMarkup.story = {
  name: 'with internal markup',
};
