import React from "react";
import{Link} from "gatsby";
import * as styles from "../../styles/navbar.module.css"



type navBarProps = {
listObjects: ListObjects;
}

/**
 * This component handles rendering a list of navigational links to within this website, since using the Gatsby's Link component
 * @param props Takes in ListObjects which is an array of name and page route for Gatsby Link component,
 * and optionally css styling
 */
const Navbar = (props : navBarProps) => {

    const objectList = props.listObjects.map((data) => 
        <li className={styles.listStyling} style={data.optionStyling} key={data.name}><Link className={styles.linkStyling} to={data.linkTo}>{data.name}</Link></li>
    );
    return(
        <div className={styles.rootDiv}>
        <div className={styles.flexDiv}>
        <ul className={styles.uList}>
        {objectList}
        </ul>
        </div>
        </div>
        )

}

export default Navbar;