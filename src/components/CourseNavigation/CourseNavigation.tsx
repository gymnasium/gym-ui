/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { color } from '../../styles';
import NavBar from '../NavBar';
import { H1 } from '../Headings';
import Link from '../Link';

interface Props {
  title: string;
  colorCode?: string;
  menuLinks?: { name: string; url: string; isActive?: boolean }[];
}

const CourseNavigation: React.FunctionComponent<Props> = ({
  title,
  colorCode = color.grey[600],
  menuLinks,
}: Props): React.ReactElement => {
  const firstBar = <H1 color={color.white}>{title}</H1>;
  const secondBar =
    menuLinks &&
    menuLinks.map(
      (item): React.ReactNode => (
        <Link isDark key={item.name} to={item.url} isActive={item.isActive}>
          {item.name}
        </Link>
      )
    );

  return (
    <Fragment>
      <NavBar
        backgroundColor={colorCode}
        height="50px"
        leftContent={firstBar}
      />
      <NavBar
        backgroundColor={color.grey.lightPageBackground}
        height="50px"
        leftContent={secondBar}
      />
    </Fragment>
  );
};

export default CourseNavigation;
