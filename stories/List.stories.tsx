import React from 'react';

import { List, ListItem, Link, JobListItem } from '../src';

export default {
  title: 'Gym UI|Components/List',

  parameters: {
    component: List,
  },
};

export const jobListing = (): React.ReactElement => {
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

  const jobs: {
    name: string;
    location: string;
    url: string;
  }[] = [
    {
      name: 'Project Manager',
      location: 'Charlotte, NC',
      url:
        'https://aquent.com/find-work/151781?utm_source=thegymnasium.com&amp;utm_medium=web&amp;utm_campaign=job-module#content',
    },
    {
      name: 'Digital Marketing Product Manager',
      location: 'Charlotte, NC',
      url:
        'https://aquent.com/find-work/151702?utm_source=thegymnasium.com&amp;utm_medium=web&amp;utm_campaign=job-module#content',
    },
  ];

  return (
    <div style={{ width: '400px' }}>
      <List headerContent={headerContent} footerContent={footerContent}>
        {jobs.map(
          (item): React.ReactElement => (
            <JobListItem
              name={item.name}
              location={item.location}
              url={item.url}
              key={item.url}
            />
          )
        )}
      </List>
    </div>
  );
};

jobListing.story = {
  name: 'Job listing',
};

export const simpleWithHeaderAndFooter = (): React.ReactElement => {
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
};

simpleWithHeaderAndFooter.story = {
  name: 'Simple with header and footer',
};

export const withoutTitle = (): React.ReactElement => (
  <List>
    <ListItem>HTML basics</ListItem>
    <ListItem>CSS basics</ListItem>
    <ListItem>Bootstrap basics</ListItem>
    <ListItem>And more...</ListItem>
  </List>
);

withoutTitle.story = {
  name: 'without title',
};

export const withInternalMarkup = (): React.ReactElement => (
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
);

withInternalMarkup.story = {
  name: 'with internal markup',
};
