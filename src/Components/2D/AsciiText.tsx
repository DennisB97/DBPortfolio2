import * as React from "react";
import {getTextAsBig} from "../../Utility/getTextAsBig";
import * as styles from "../../styles/asciitext.module.css"

interface asciiTextProps{
    children: any;
    styling?: any;
    bClassStyling?: boolean;
    bAnimated?: boolean;
}

const AsciiText = (props : asciiTextProps) => {

    return(
        <pre className={props.bClassStyling ? (props.bAnimated ? styles.asciiAnimated : styles.ascii) : ""} style={props.styling}>
        {typeof props.children === "string" ? getTextAsBig(props.children) : null}
        </pre>
    )


}

AsciiText.defaultProps = {
    bAnimated: false,
    bClassStyling: false
}

export default AsciiText;