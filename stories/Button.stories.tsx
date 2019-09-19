import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src';
import { color } from '../src/styles';

const onClickAction = action('Button clicked');

storiesOf('Button', module)
  .addParameters({
    component: Button,
    componentSubtitle: `Gymnasium's branded, hoverable, clickable button`,
  })
  .addWithJSX(
    'Summary',
    (): React.ReactElement => (
      <>
        <Button onClick={onClickAction}>Default</Button>
        <Button allCaps onClick={onClickAction}>
          all caps
        </Button>
        <div
          style={{
            backgroundColor: color.black,
            padding: '1rem',
            margin: '1rem 0',
          }}
        >
          <Button lightBorder onClick={onClickAction}>
            Light Border
          </Button>
        </div>
        <Button fullWidth onClick={onClickAction}>
          Full Width
        </Button>
      </>
    )
  )
  .addWithJSX(
    'default',
    (): React.ReactElement => <Button onClick={onClickAction}>Default</Button>
  )
  .addWithJSX(
    'full width',
    (): React.ReactElement => (
      <Button fullWidth onClick={onClickAction}>
        Full Width
      </Button>
    )
  )
  .addWithJSX(
    'all caps',
    (): React.ReactElement => (
      <Button allCaps onClick={onClickAction}>
        all caps
      </Button>
    )
  )
  .addWithJSX(
    'light border on a dark background',
    (): React.ReactElement => (
      <div
        style={{
          backgroundColor: color.black,
          padding: '1rem',
          margin: '1rem 0',
        }}
      >
        <Button lightBorder onClick={onClickAction}>
          Light Border
        </Button>
      </div>
    )
  );
