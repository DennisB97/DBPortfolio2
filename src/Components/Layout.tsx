import React, { ReactNode } from 'react';
import * as styles from '../styles/layout.module.css';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
html,
body,
#___gatsby,
#gatsby-focus-wrapper{
    margin: 0;
    padding: 0;
    height: 100%;
    overflow:hidden;
    box-sizing: border-box;
    background-color: black;
}
`;

interface LayoutProps {
  children: ReactNode;
};

/**
 * This component is the main outer layout for all 2D pages, contains a border that wraps around whole screen.
 * @param children Forwards all children into a inner body div.
 */
const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <div className={styles.rootDiv}>
      <Global />
      <div className={styles.mainBorder}>
        <div className={styles.mainBorderDetail} />
      </div>
      <div className={styles.glassLayer} />
      <div className={styles.outerBody}>
        <div className={styles.innerBody}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutPage;
