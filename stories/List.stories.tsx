import React from 'react';

import { storiesOf } from '@storybook/react';

import { List, ListItem } from '../src';

storiesOf('List', module)
  .addParameters({
    component: List,
  })
  .addWithJSX(
    'with title',
    (): React.ReactElement => {
      const title = 'Skills covered';
      return (
        <List title={title}>
          <ListItem>HTML basics</ListItem>
          <ListItem>CSS basics</ListItem>
          <ListItem>Bootstrap basics</ListItem>
          <ListItem>And more...</ListItem>
        </List>
      );
    }
  )
  .addWithJSX(
    'without title',
    (): React.ReactElement => (
      <List>
        <ListItem>HTML basics</ListItem>
        <ListItem>CSS basics</ListItem>
        <ListItem>Bootstrap basics</ListItem>
        <ListItem>And more...</ListItem>
      </List>
    )
  )
  .addWithJSX(
    'with internal markup',
    (): React.ReactElement => (
      <List>
        <ListItem>Some content Here</ListItem>
        <ListItem>
          with <em>any</em> amount of markup added should <u>render</u>
        </ListItem>
        <ListItem>
          <p>even with a few block type elements</p>
          <p>within</p>
        </ListItem>
      </List>
    )
  );
