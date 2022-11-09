import * as React from "react";
import * as styles from "../styles/promptbox.module.css";

interface childProps{
descriptionText : string;
buttonOneText : string;
buttonTwoText : string;
descriptionTextStyling?: any;
buttonOneTextStyling?: any;
buttonTwoTextStyling?: any;
buttonOneClickFunction?(...args: any[]): any;
buttonTwoClickFunction?(...args: any[]): any;
}


const PromptBox = ({descriptionText,descriptionTextStyling,buttonOneTextStyling,buttonOneClickFunction,buttonTwoTextStyling,buttonTwoClickFunction,buttonOneText,buttonTwoText} : childProps) => {
return(
    <div className={styles.rootDiv}>
    <div className={styles.promptBody}>
    <div className={styles.bodyColumn}>
    <p className={styles.bodyDescriptionText} style={descriptionTextStyling}>{descriptionText}</p>
    <div className={styles.buttonHolderDiv}>
    <button className={styles.button} style={buttonOneTextStyling} onClick={() => (buttonOneClickFunction !== undefined) ? buttonOneClickFunction(0) : void 0}>{buttonOneText}</button>
    <button className={styles.button} style={buttonTwoTextStyling} onClick={() => (buttonTwoClickFunction !== undefined) ? buttonTwoClickFunction(1) : void 0}>{buttonTwoText}</button>
    </div>
    </div>
    </div>
    </div>
    )
}

export default PromptBox;



