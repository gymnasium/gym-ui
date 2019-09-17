import React from 'react';

import { storiesOf } from '@storybook/react';

import { TabbedContainer } from '../src';
import { color } from '../src/styles';

storiesOf('TabbedContainer', module).addWithJSX(
  'with title',
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

        <TabbedContainer title={`${title} - Tab 3`}>
          <section className="row how-gymnasium-works">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h2>Free Online Courses</h2>
              <p>
                Our courses are taught by industry experts. You can enroll
                anytime, anywhere.
              </p>
            </div>
          </section>

          <div className="row">
            <section className="highlighted-courses col-md-12">
              <header className="text-center header-tab">
                <h1>Featured Courses</h1>
              </header>

              <section className="courses row">
                <div className="section-featured-courses">
                  <div className="cols">
                    <ul className="list-featured-courses">
                      <li>
                        <div className="card featured-course user-experience">
                          <div className="card-main equal-h">
                            <header>
                              <b className="course-type">User Experience</b>
                              <div className="mask">
                                <a
                                  href="https://thegymnasium.com/courses/course-v1:GYM+015+0/about"
                                  title="Learn More"
                                >
                                  <img
                                    alt="Prototyping for Digital Products and Websites"
                                    srcSet="https://gymcms.xyz/img/course-artwork/svg/gym-015.svg"
                                    src="https://thegymnasium.com/asset-v1:GYM+015+0+type@asset+block@gym-015.png"
                                    width="256"
                                  />
                                </a>
                              </div>
                              <h2>
                                <a
                                  href="https://thegymnasium.com/courses/course-v1:GYM+015+0/about"
                                  title="Learn More"
                                >
                                  Prototyping for Digital Products and Websites
                                </a>
                              </h2>
                              <p>
                                A case for using prototyping in your design
                                process to boost efficient collaboration.
                              </p>
                            </header>
                          </div>
                          <div className="card-footer">
                            <div className="card-info">
                              <dl className="instructor">
                                <dt className="byline">
                                  <b>with Jenna Bantjes</b>
                                </dt>
                                <dd>Experience Designer</dd>
                              </dl>
                            </div>
                            <div className="card-cta">
                              <a
                                className="gym-button"
                                href="https://thegymnasium.com/courses/course-v1:GYM+015+0/about"
                              >
                                <b>Learn More</b>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="about-featured-courses">
                    <div className="description">
                      <p>
                        Gymnasium offers free online courses on web development,
                        design, user experience, and content creation.
                      </p>
                    </div>
                    <div className="cta">
                      <a
                        className="gym-button"
                        href="https://thegymnasium.com/courses"
                      >
                        <b>View all Courses</b>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
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
);
