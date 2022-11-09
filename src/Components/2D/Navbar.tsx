import * as React from "react";
import{Link} from "gatsby";
import * as styles from "../../styles/navbar.module.css"



interface navBarProps{
listObjects: ListObjects;
}


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