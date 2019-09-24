/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, Fragment } from 'react';
import { color, typeface } from '../../styles';
import Link from '../Link';

const style = css`
  font: normal 1rem/1 ${typeface.title};
  display: inline-block;
  color: ${color.orange};
  border: none;
  padding: 0.25rem 0;
  background-color: transparent;
  :focus {
    outline: 0;
  }
`;

interface Props {
  userId: string;
  logoutUrl: string;
}

const UserLogoutMenu: React.FunctionComponent<Props> = ({
  userId,
  logoutUrl,
}: Props): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const caretStyle = css`
    display: inline-block;
    width: 0;
    height: 0;
    margin: ${isOpen
      ? `0.2rem 0.1rem 0.3rem 0.4rem`
      : `0.3rem 0.25rem 0.2rem 0.25rem`};
    line-height: 0;
    vertical-align: middle;
    border-top: ${isOpen ? `0.25em solid transparent` : `0.25em solid`};
    border-left: ${isOpen ? `0.25em solid` : `0.25em solid transparent`};
    border-bottom: 0.25em solid transparent;
    border-right: 0.25em solid transparent;
  `;

  return (
    <div>
      <button
        type="button"
        css={style}
        onClick={(): void => setIsOpen(!isOpen)}
      >
        <span>{userId}</span>
        <span css={caretStyle} />
      </button>
      {isOpen && (
        <Link isLight to={logoutUrl}>
          Log Out
        </Link>
      )}
    </div>
  );
};
export default UserLogoutMenu;
