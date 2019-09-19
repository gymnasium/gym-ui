import React from 'react';

import { storiesOf } from '@storybook/react';

import { BulletedList, ListItem } from '../src';

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
          <ListItem>HTML basics</ListItem>
          <ListItem>CSS basics</ListItem>
          <ListItem>Bootstrap basics</ListItem>
          <ListItem>And more...</ListItem>
        </BulletedList>
      );
    }
  )
  .addWithJSX(
    'without title',
    (): React.ReactElement => (
      <BulletedList>
        <ListItem>HTML basics</ListItem>
        <ListItem>CSS basics</ListItem>
        <ListItem>Bootstrap basics</ListItem>
        <ListItem>And more...</ListItem>
      </BulletedList>
    )
  )
  .addWithJSX(
    'with internal markup',
    (): React.ReactElement => (
      <BulletedList>
        <ListItem>Some content Here</ListItem>
        <ListItem>
          with <em>any</em> amount of markup added should <u>render</u>
        </ListItem>
        <ListItem>
          <p>even with a few block type elements</p>
          <p>within</p>
        </ListItem>
      </BulletedList>
    )
  );
