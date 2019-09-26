import React from 'react';

import { storiesOf } from '@storybook/react';

import { List, ListItem, Link, JobListItem } from '../src';

storiesOf('List', module)
  .addParameters({
    component: List,
  })
  .addWithJSX(
    'Job listing',
    (): React.ReactElement => {
      const headerContent = (
        <>
          Viewing jobs in <em>Charlotte</em>...
        </>
      );
      const footerContent = (
        <Link to="http://aquent.com/find-work/?l=61&amp;utm_source=gymnasium&amp;utm_medium=web&amp;utm_campaign=homepagejobs&amp;utm_content=viewall">
          View all jobs in <em>Charlotte</em> →
        </Link>
      );

      const jobs = [];

      return (
        <div style={{ width: '400px' }}>
          <List headerContent={headerContent} footerContent={footerContent}>
            <JobListItem
              name="Project Manager"
              location="Charlotte, NC"
              url="https://aquent.com/find-work/151781?utm_source=thegymnasium.com&amp;utm_medium=web&amp;utm_campaign=job-module#content"
            />
            <ListItem class="row gym-microservice-job-listing">
              <a
                href="https://aquent.com/find-work/151702?utm_source=thegymnasium.com&amp;utm_medium=web&amp;utm_campaign=job-module#content"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="job-post">
                  <b class="job-title col-xs-8">
                    Digital Marketing Product Manager
                  </b>{' '}
                  <em class="job-market col-xs-4 text-right">Charlotte, NC</em>
                </div>
              </a>
            </ListItem>
          </List>
        </div>
      );
    }
  )
  .addWithJSX(
    'Simple with header and footer',
    (): React.ReactElement => {
      const headerContent = 'Title goes here';
      const footerContent = 'List ends at this footer here';
      return (
        <List headerContent={headerContent} footerContent={footerContent}>
          <ListItem>Simple item, text only</ListItem>
          <ListItem>
            Can also contain <b>markup</b>
          </ListItem>
          <ListItem>
            Or even a <Link to="/">Link</Link>
          </ListItem>
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
