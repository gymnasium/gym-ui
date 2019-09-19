import React from 'react';

import { storiesOf } from '@storybook/react';

import { TabbedContainer } from '../src';
import { color } from '../src/styles';

storiesOf('TabbedContainer', module)
  .addParameters({
    component: TabbedContainer,
  })
  .addWithJSX(
    'default colors',
    (): React.ReactElement => {
      const title = 'How Gymnasium Works';
      return (
        <>
          <div style={{ backgroundColor: color.green }}>
            <br />
            Content Before
            <br />
            <br />
          </div>
          <TabbedContainer title="Tab 1">111</TabbedContainer>
          <TabbedContainer title="Tab 2">222</TabbedContainer>

          <TabbedContainer title={title}>
            <h2>Free Online Courses</h2>
            <p>
              Our courses are taught by industry experts. You can enroll
              anytime, anywhere.
            </p>
          </TabbedContainer>
          <TabbedContainer title="Tab 4">444</TabbedContainer>
          <div style={{ backgroundColor: color.purple }}>
            <br />
            Content After
            <br />
            <br />
          </div>
        </>
      );
    }
  )
  .addWithJSX(
    'color override',
    (): React.ReactElement => {
      const title = 'How Gymnasium Works';
      return (
        <>
          <div style={{ backgroundColor: color.green }}>
            <br />
            Content Before
            <br />
            <br />
          </div>
          <TabbedContainer
            title={title}
            backgroundColor={color.black}
            textColor={color.orange}
          >
            <h2>Free Online Courses</h2>
            <p>
              Our courses are taught by industry experts. You can enroll
              anytime, anywhere.
            </p>
          </TabbedContainer>
          <div style={{ backgroundColor: color.purple }}>
            <br />
            Content After
            <br />
            <br />
          </div>
        </>
      );
    }
  );
