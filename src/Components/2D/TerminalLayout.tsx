import * as React from "react";
import {ReactNode, useEffect, useState} from "react";
import * as styles from "../../styles/terminallayout.module.css";
import Navbar from "./Navbar";
import {getTextAsBig} from "../../Utility/getTextAsBig";
import {format} from 'date-fns';
import GradualText from "./GradualText";
import AsciiText from "./AsciiText";


interface childProps{
contentText?: string;
contentTextInitialDelay?: number;
contentTextWordSpeed?: number;
listObjects?: ListObjects;
asciiPreText?: string;
asciiPreTextDetail?: string;
bAsciiClock?: boolean;
children?: ReactNode;
bAnimatedPreAscii?: boolean;
}


const TerminalLayout = ({listObjects, contentText,contentTextInitialDelay,contentTextWordSpeed,asciiPreText,asciiPreTextDetail,bAsciiClock,children,bAnimatedPreAscii} : childProps) => {
    const [time,setTime] = useState<number>(Date.now());
    var clock : number;

    useEffect(() => {
    
        if(bAsciiClock === true)
      clock = window.setInterval(() => {
        setTime(Date.now);
      }, 1000);

      return () => {
        window.clearInterval(clock);
      };
    }, []);


    const navBar = (listObjects !== undefined) ? <Navbar listObjects={listObjects}></Navbar> : null;
    const AsciiPre = (asciiPreText !== undefined) ? <AsciiText bClassStyling={true} bAnimated={true}>{asciiPreText}</AsciiText> : null;
    const AsciiPreDetail = (asciiPreTextDetail !== undefined) ? <AsciiText styling={{ animationDelay: "2s", animationIterationCount: "infinite"}} bClassStyling={true} bAnimated={true}>{asciiPreTextDetail}</AsciiText> : null;
    const asciiDate = (bAsciiClock) ? <AsciiText styling={{fontSize: "4px", color: "white"}} >{format(time,`EEEE  do  MMM yyyy`)}</AsciiText> : null;
    const asciiClock = (bAsciiClock) ? <AsciiText styling={{fontSize: "4px", color: "white"}} >{format(time,`HH:mm:ss`)}</AsciiText> : null;

    return(
        <div className={styles.rootDiv}>
        <div className={styles.innerDiv}>
        <div style={{display: "flex",flexDirection: "row"}}>
        {AsciiPre}
        {AsciiPreDetail}
        </div>
        {asciiDate}
        {asciiClock}
        <div className={styles.contentDiv}>
        {contentText !== undefined ? <GradualText initialDelay={contentTextInitialDelay} wordSpeed={contentTextWordSpeed}>{contentText}</GradualText> : null}
        {children}
        </div>
        </div>
        {navBar}
        </div>

        )
}

TerminalLayout.defaultProps = {
    bAsciiClock: false,
    bAnimatedPreAscii: true
  }

export default TerminalLayout