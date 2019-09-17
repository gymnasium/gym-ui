/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color, typeface } from '../../styles';

const style = css``;

interface Props {
  title?: string;
  children: React.ReactNode;
}

const TabbedContainer: React.FunctionComponent<Props> = ({
  title = '',
  children,
}: Props): React.ReactElement => {
  return (
    <div className="container">
      <header className="header-tab text-center">
        <h1>{title}</h1>
      </header>

      {children}
    </div>
  );
};

export default TabbedContainer;
