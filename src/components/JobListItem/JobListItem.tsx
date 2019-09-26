/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ListItem from '../ListItem';
import Link from '../Link';

const style = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .location {
    padding-right: 1rem;
    transition: all 0.2s ease-in-out;
  }
  .name {
    padding-left: 0rem;
    transition: all 0.2s ease-in-out;
  }
  .arrow {
    display: inline-block;
    width: 0rem;
  }
  :hover {
    .name,
    .location {
      padding-left: 1rem;
      padding-right: 0rem;
      transition: all 0.2s ease-in-out;
    }
    .name {
      text-decoration: underline;
    }
    .arrow::after {
      content: '→';
    }
  }
`;

interface Props {
  /** Job name */
  name: string;
  /** Job location */
  location: string;
  /** Job posting URL */
  url: string;
}

const JobListItem: React.FunctionComponent<Props> = ({
  name,
  location,
  url,
}: Props): React.ReactElement => (
  <ListItem>
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div css={style}>
        <b className="name">{name}</b>
        <em className="location">
          {location}
          <span className="arrow" />
        </em>
      </div>
    </Link>
  </ListItem>
);
export default JobListItem;
