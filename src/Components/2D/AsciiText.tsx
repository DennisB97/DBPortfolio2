import React, {ReactNode} from "react";
import {getTextAsBig} from "../../Utility/getTextAsBig";
import * as styles from "../../styles/asciitext.module.css"

type AsciiTextProps = {
    children: ReactNode;
    styling?: React.CSSProperties;
    bClassStyling?: boolean;
    bAnimated?: boolean;
}

/**
 * AsciiText renders text inside pre and the text is made into figlet Big font with figlet library. 
 * @param props are  mostly optional styling values, but children is used for the text to be rendered. 
 */
const AsciiText = ({children,styling,bAnimated = false,bClassStyling = false} : AsciiTextProps) => {

    return(
        <pre className={bClassStyling ? (bAnimated ? styles.asciiAnimated : styles.ascii) : ""} style={styling}>
        {typeof children === "string" ? getTextAsBig(children) : null}
        </pre>
    )


}

export default AsciiText;