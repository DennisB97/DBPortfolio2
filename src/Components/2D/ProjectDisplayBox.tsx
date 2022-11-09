import React from "react";
import { navigate } from "gatsby"
import * as styles from "../../styles/projectdisplaybox.module.css"
import { GatsbyImage, getImage, IGatsbyImageData  } from "gatsby-plugin-image"

type boxProps = {
    linkTo : string;
    imageData: IGatsbyImageData;
    imageAlt: string;
}

/**
 * This component displays a box divided with a image and a text, image is shown with GatsbyImage component.
 * It works as a button which routes to the project it displays.
 * @param props imageData contains the image received from query from parent component, imageAlt is alt text for the image.
 * linkTo contains the url to route to from gatsby's navigate function
 */
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