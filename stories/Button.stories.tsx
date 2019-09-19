import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src';
import { color } from '../src/styles';

const onClickAction = action('Button clicked');

const defaultButton = <Button onClick={onClickAction}>Default</Button>;
const fullWidthButton = (
  <Button fullWidth onClick={onClickAction}>
    Full Width
  </Button>
);
const allCapsButton = (
  <Button allCaps onClick={onClickAction}>
    all caps
  </Button>
);

const lightButton = (
  <div
    style={{
      backgroundColor: color.grey.lightPageBackground,
      padding: '1rem',
      margin: '1rem 0',
    }}
  >
    <Button lightBorder onClick={onClickAction}>
      Light Border
    </Button>
  </div>
);

const linkButton = <Button to="/">Link</Button>;

storiesOf('Button', module)
  .addParameters({
    component: Button,
    componentSubtitle: `Gymnasium's branded, hoverable, clickable button`,
  })
  .addWithJSX(
    'Summary',
    (): React.ReactElement => (
      <>
        {defaultButton}
        {allCapsButton}
        {lightButton}
        {fullWidthButton}
        {linkButton}
      </>
    )
  )
  .addWithJSX('default', (): React.ReactElement => defaultButton)
  .addWithJSX('full width', (): React.ReactElement => fullWidthButton)
  .addWithJSX('all caps', (): React.ReactElement => allCapsButton)
  .addWithJSX(
    'light border on a dark background',
    (): React.ReactElement => lightButton
  )
  .addWithJSX('hyperlink', (): React.ReactElement => linkButton);
