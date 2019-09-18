/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

interface Props {
  title?: string;
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
}

const TabbedContainer: React.FunctionComponent<Props> = ({
  title = '',
  children,
  textColor = '',
  backgroundColor = '',
}: Props): React.ReactElement => {
  const style = css`
    border: none;
    background: transparent;
    padding-top: 0;
    padding-bottom: 4em;
    margin: 0 auto 0;
    font-family: ${typeface.text};

    :nth-of-type(odd) {
      color: ${textColor || color.grey.lightPageBackground};
      background-color: ${backgroundColor || color.grey.dark};
      > header > h1::before {
        border-bottom: 1.4em solid ${backgroundColor || color.grey.dark};
      }
    }
    :nth-of-type(even) {
      color: ${textColor || color.grey.dark};
      background-color: ${backgroundColor || color.grey.lightPageBackground};
      > header > h1::before {
        border-bottom: 1.4em solid
          ${backgroundColor || color.grey.lightPageBackground};
      }
    }

    header {
      text-align: center;
      font-family: ${typeface.title};
      h1 {
        display: inline-block;
        font-size: 1.75em;
        line-height: 1.2;
        text-transform: uppercase;
        vertical-align: 1.2em;
        margin-top: -1em;
        text-align: center;

        ::before {
          display: inline-block;
          width: 100%;
          height: 0;
          content: '';
          line-height: 0;
          padding-right: 1em;
          padding-left: 1em;
          border-right: 1.4em dashed transparent;
          border-left: 1.4em dashed transparent;
          box-sizing: border-box;
          vertical-align: top;
          position: relative;
          z-index: 100;
        }
      }
    }
  `;

  return (
    <div css={style}>
      {title && (
        <header>
          <h1>{title}</h1>
        </header>
      )}

      {children}
    </div>
  );
};

export default TabbedContainer;
