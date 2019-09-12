import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Link.module.css';

interface LinkProps {
  children: React.ReactChild;
  to?: string;
}

const Link = ({ children, to = '#' }: LinkProps): React.ReactElement => (
  <a className={classes.link} href={to}>
    {children}
  </a>
);

// Link.defaultProps = {
//   to: '#',
// };

// Link.propTypes = {
//   to: PropTypes.string,
// };

export default Link;
