import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/navbar.module.css';

interface navBarProps {
  listObjects: ListObjects;
}

/**
 * This component handles rendering a list of navigational links to within this website, since using the Gatsby's Link component.
 * @param listObjects An array of name and page route for Gatsby Link component, and optionally css styling.
 */
const Navbar = ({ listObjects }: navBarProps) => {
  const objectList = listObjects.map((data) => (
    <li
      className={styles.listStyling}
      style={data.optionStyling}
      key={data.name}
    >
      <Link className={styles.linkStyling} to={data.linkTo}>
        {data.name}
      </Link>
    </li>
  ));
  return (
    <div className={styles.rootDiv}>
      <div className={styles.flexDiv}>
        <ul className={styles.uList}>{objectList}</ul>
      </div>
    </div>
  );
};

export default Navbar;
