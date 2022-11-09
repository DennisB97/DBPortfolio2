import React from "react";
import { navigate } from "gatsby"
import * as styles from "../../styles/projectdisplaybox.module.css"
import { GatsbyImage, getImage, IGatsbyImageData  } from "gatsby-plugin-image"

interface boxProps{
    linkTo : string;
    imageData: IGatsbyImageData;
    imageAlt: any;
}

const ProjectDisplayBox = (props : boxProps) => {
const image = getImage(props.imageData);

return(
    <button onClick={() => navigate(`/projects/` + props.linkTo)} className={styles.displayBox}>
    <div className={styles.divider}>
    {image !== undefined ? <GatsbyImage style={{height: "70%"}} image={image} alt={props.imageAlt}/> : null}
    <div style={{width: "100%",height: "30%", display: "flex",flexDirection: "column",justifyContent: "center"}}>
    <p className={styles.title}>{props.imageAlt}</p>
    </div>
    </div>
    </button>
    )
}

export default ProjectDisplayBox;