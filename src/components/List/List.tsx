/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css`
  border: 1px red solid;
  font: 700 0.8rem/1.3 ${typeface.title};
  color: ${color.black};
  border-bottom: 1px dashed ${color.grey.regular};
  /* padding: 1rem; */
  /* letter-spacing: 0.06em; */
  /* word-spacing: 0.05em; */
  /* margin-bottom: 1rem;
  margin-left: 1rem;
  margin-top: 1rem; */

  ul {
    padding: 0rem;
    margin: 0rem;
    list-style: none;
  }
  li {
    border-bottom: 1px solid ${color.grey.regular};
    padding: 1rem 1rem;
    font-weight: normal;
  }
  li:last-of-type {
    border-bottom: none;
  }
  header {
    padding-top: 0.75rem;
  }
  footer {
    border-top: 1px solid ${color.grey.regular};
    padding: 1rem 0;
  }
`;
// const titleStyle = css`
//   font: 900 1em/1.2 ${typeface.title};
//   text-transform: uppercase;
//   margin-bottom: 0.6em;
// `;

interface Props {
  children: React.ReactNode;
  /** List header content string or markup */
  headerContent?: React.ReactNode;
  /** List footer content string or markup */
  footerContent?: React.ReactNode;
}

const List: React.FunctionComponent<Props> = ({
  children,
  headerContent,
  footerContent,
}: Props): React.ReactElement => {
  return (
    // <ul css={style}>
    //   {title && <div css={titleStyle}>{title}</div>}
    //   {children}
    // </ul>
    <article css={style}>
      {headerContent && <header>{headerContent}</header>}
      <section>
        <ul>{children}</ul>
      </section>
      {footerContent && <footer>{footerContent}</footer>}
    </article>
  );
};

export default List;
