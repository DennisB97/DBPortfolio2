import React, { ReactNode } from 'react';
import * as styles from '../styles/promptbox.module.css';

interface childProps {
  descriptionText: string;
  buttonOneText: string;
  buttonTwoText: string;
  descriptionTextStyling?: React.CSSProperties;
  buttonOneTextStyling?: React.CSSProperties;
  buttonTwoTextStyling?: React.CSSProperties;
  buttonOneClickFunction?(buttonID: number, ...args: ReactNode[]): void;
  buttonTwoClickFunction?(buttonID: number, ...args: ReactNode[]): void;
}

/**
 * This component renders a promptbox with two buttons, and a question text.
 * @param descriptionText gives the request and cause of the prompt.
 * @param descriptionTextStyling optional styling props for each text.
 * @param buttonOneTextStyling optional styling props for each text.
 * @param buttonOneClickFunction functions given for button to execute.
 * @param buttonTwoTextStyling optional styling props for each text.
 * @param buttonTwoClickFunction functions given for button to execute.
 * @param buttonOneText text shows what the button does.
 * @param buttonTwoText text shows what the second button does.
 */
const PromptBox = ({
  descriptionText,
  descriptionTextStyling,
  buttonOneTextStyling,
  buttonOneClickFunction,
  buttonTwoTextStyling,
  buttonTwoClickFunction,
  buttonOneText,
  buttonTwoText,
}: childProps) => {
  return (
    <div className={styles.rootDiv}>
      <div className={styles.promptBody}>
        <div className={styles.bodyColumn}>
          <p
            className={styles.bodyDescriptionText}
            style={descriptionTextStyling}
          >
            {descriptionText}
          </p>
          <div className={styles.buttonHolderDiv}>
            <button
              className={styles.button}
              style={buttonOneTextStyling}
              onClick={() =>
                buttonOneClickFunction !== undefined
                  ? buttonOneClickFunction(0)
                  : void 0
              }
            >
              {buttonOneText}
            </button>
            <button
              className={styles.button}
              style={buttonTwoTextStyling}
              onClick={() =>
                buttonTwoClickFunction !== undefined
                  ? buttonTwoClickFunction(1)
                  : void 0
              }
            >
              {buttonTwoText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
