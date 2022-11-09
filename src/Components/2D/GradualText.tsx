import React from "react";
import {ReactNode, useEffect, useState} from "react";

interface gradualTextProps
{
    initialDelay: number | undefined;
    wordSpeed: number  | undefined;
    children: any;
}

const GradualText = ( props: gradualTextProps) => {

    const [counter,setCounter] = useState<number>(0);
    const [delayTimer,setDelayTimer] = useState<number>(0);
    const [bShowWords,setShowWords] = useState<boolean>(false);
    const [words,setWords] = useState<string>("");
    const [currentWordIndex,setWordIndex] = useState<number>(0);

    const initialDelay : number = props.initialDelay !== undefined ? props.initialDelay : 1000;
    const wordSpeed : number = props.wordSpeed !== undefined ? props.wordSpeed : 100;
    const wordArray : string[] | undefined = typeof props.children === 'string' ? props.children?.split(' ') : undefined;

    var wordWriter : number;
    
    useEffect(() => {

      wordWriter = window.setInterval(() => {
        setCounter(counter => counter + 1);
        setDelayTimer(delayTimer => delayTimer + wordSpeed);
      },wordSpeed)

      return () => {
        window.clearInterval(wordWriter);
      };
    }, []);

    useEffect(() => {

        if(delayTimer >= initialDelay && !bShowWords)
        {
            setCounter(0);
            setShowWords(true);
        }

    },[delayTimer]);

    useEffect(() => {

        if(bShowWords)
        {
           gradualText();
        }

    },[counter]);



    function gradualText() : void {

        if(wordArray !== undefined)
        {   
            if(currentWordIndex === 0)
            {
                setWords(wordArray[currentWordIndex]);
                setWordIndex(currentWordIndex => currentWordIndex + 1);
                return;
            }
            else if(wordArray.length > currentWordIndex)
            {
                setWords(words => words.concat(" ",wordArray[currentWordIndex]));
                setWordIndex(currentWordIndex => currentWordIndex + 1);
            }
            else
            {
                window.clearInterval(wordWriter);
            }
         
        }

        return;
    }

    return(
        <p style={{fontSize: "18px", color: "white"}}>{words}</p>
        )


}

export default GradualText;