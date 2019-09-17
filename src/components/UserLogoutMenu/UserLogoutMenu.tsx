/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, Fragment } from 'react';
import { color, typeface } from '../../styles';

const style = css`
  font: normal 1.2em/1 ${typeface.title};
  display: inline-block;
  color: ${color.orange};
  border: none;
`;
const caretDownStyle = css`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.25em;
  vertical-align: middle;
  border-top: 0.25em solid;
  border-right: 0.25em solid transparent;
  border-left: 0.25em solid transparent;
`;
const caretRightStyle = css`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.25em;
  line-height: 0;
  padding: 0 0.2em;
  vertical-align: middle;
  border-top: 0.25em solid transparent;
  border-left: 0.25em solid;
  border-bottom: 0.25em solid transparent;
  /* margin-left: -0.8em; */
`;

interface Props {
  userId: string;
}

const UserLogoutMenu: React.FunctionComponent<Props> = ({
  userId,
}: Props): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <span css={style}>
        <span>{userId}</span>
        <span css={caretRightStyle} />
        <a href="/logout" role="menuitem">
          Log Out
        </a>
      </span>
      <br />
      <span css={style}>
        <span>{userId}</span>
        <span css={caretDownStyle} />
        <a href="/logout" role="menuitem">
          Log Out
        </a>
      </span>
    </Fragment>
  );
};
export default UserLogoutMenu;
