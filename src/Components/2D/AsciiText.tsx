import React, { ReactNode } from 'react';
import { getTextAsBig } from '../../Utility/getTextAsBig';
import * as styles from '../../styles/asciitext.module.css';

interface AsciiTextProps {
  children: ReactNode;
  styling?: React.CSSProperties;
  bClassStyling?: boolean;
  bAnimated?: boolean;
};

/**
 * AsciiText renders text inside pre and the text is made into figlet Big font with figlet library.
 * @param children children is used for the text to be rendered.
 * @param styling some optional inline styling.
 * @param bAnimated optionally animating the ascii text.
 * @param bClassStyling optionally having a module.css style applied.
 */
const AsciiText = ({
  children,
  styling,
  bAnimated = false,
  bClassStyling = false,
}: AsciiTextProps) => {
  return (
    <pre
      className={
        bClassStyling ? (bAnimated ? styles.asciiAnimated : styles.ascii) : ''
      }
      style={styling}
    >
      {typeof children === 'string' ? getTextAsBig(children) : null}
    </pre>
  );
};

export default AsciiText;
