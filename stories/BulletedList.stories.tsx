import React from 'react';

import { storiesOf } from '@storybook/react';

import { BulletedList, BulletedListItem } from '../src';

storiesOf('BulletedList', module)
  .addParameters({
    component: BulletedList,
  })
  .addWithJSX(
    'with title',
    (): React.ReactElement => {
      const title = 'Skills covered';
      return (
        <BulletedList title={title}>
          <BulletedListItem>HTML basics</BulletedListItem>
          <BulletedListItem>CSS basics</BulletedListItem>
          <BulletedListItem>Bootstrap basics</BulletedListItem>
          <BulletedListItem>And more...</BulletedListItem>
        </BulletedList>
      );
    }
  )
  .addWithJSX(
    'without title',
    (): React.ReactElement => (
      <BulletedList>
        <BulletedListItem>HTML basics</BulletedListItem>
        <BulletedListItem>CSS basics</BulletedListItem>
        <BulletedListItem>Bootstrap basics</BulletedListItem>
        <BulletedListItem>And more...</BulletedListItem>
      </BulletedList>
    )
  )
  .addWithJSX(
    'with internal markup',
    (): React.ReactElement => (
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
    )
  );
