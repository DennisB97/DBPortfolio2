import React,  {ReactNode, useEffect, useState}  from "react";
import * as styles from "../../styles/terminallayout.module.css";
import Navbar from "./Navbar";
import {format} from 'date-fns';
import GradualText from "./GradualText";
import AsciiText from "./AsciiText";


type childProps = {
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

/**
 * This component acts as a second layout for the inner content within layout component. 
 * This component provides optional ascii text and clock at top, also a navbar. 
 * And a infinite scrolling content div for text or other misc stuff.
 * @param param most props are optional. 
 * contentText can be used to utilize gradualtext component to render text given, together with the initialDelay and wordSpeed props to control it.
 * ListObjects given to the navbar to show which links should be visible
 */
const TerminalLayout = ({listObjects, contentText,contentTextInitialDelay,contentTextWordSpeed,asciiPreText,asciiPreTextDetail,bAsciiClock = false,children,bAnimatedPreAscii = true} : childProps) => {
    const [time,setTime] = useState<number>(Date.now());
    const [bGradualTextDone,setGradualTextDone] = useState<boolean>(false);
    var clock : number;

    useEffect(() => {
    
      if(contentText === undefined)
      {
        setGradualTextDone(true);
      }


        if(bAsciiClock === true)
      clock = window.setInterval(() => {
        setTime(Date.now);
      }, 1000);

      return () => {
        window.clearInterval(clock);
      };
    }, []);



    const navBar = (listObjects !== undefined) ? <Navbar listObjects={listObjects}></Navbar> : null;
    const AsciiPre = (asciiPreText !== undefined) ? <AsciiText bClassStyling={true} bAnimated={bAnimatedPreAscii}>{asciiPreText}</AsciiText> : null;
    const AsciiPreDetail = (asciiPreTextDetail !== undefined) ? <AsciiText styling={{ animationDelay: "2s", animationIterationCount: "infinite"}} bClassStyling={true} bAnimated={true}>{asciiPreTextDetail}</AsciiText> : null;
    const asciiDate = (bAsciiClock) ? <AsciiText styling={{fontSize: "4px", color: "white"}} >{format(time,`EEEE  do  MMM yyyy`)}</AsciiText> : null;
    const asciiClock = (bAsciiClock) ? <AsciiText styling={{fontSize: "4px", color: "white"}} >{format(time,`HH:mm:ss`)}</AsciiText> : null;
    const childContent = (bGradualTextDone) ? <>
    {children}

    </> : null;
    
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
        {contentText !== undefined ? <GradualText setGradualTextDone={setGradualTextDone} initialDelay={contentTextInitialDelay} wordSpeed={contentTextWordSpeed}>{contentText}</GradualText> : null}
        {childContent}
        </div>
        </div>
        {navBar}
        </div>

        )
}

export default TerminalLayout