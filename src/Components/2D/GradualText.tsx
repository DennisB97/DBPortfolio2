import React, {ReactNode, useEffect, useState} from "react";


type gradualTextProps = {
    initialDelay?: number;
    wordSpeed?: number;
    setGradualTextDone(value : boolean): void;
    children: ReactNode;
}

/**
 * This component renders a paragraph which gets gradually more words put into the string.
 * @param props given props are a initialDelay and wordSpeed both given in ms. 
 * The interval will only tick as fast as the wordSpeed so initialDelay will will be rounded to minimum of wordSpeed
 * Receives also setGradualTextDone function which is used to tell the owner of this component that all the text given has been displayed.
 * And the text to be revealed is given as children.
 */
const GradualText = ( {initialDelay = 1000, wordSpeed = 100,setGradualTextDone,children}: gradualTextProps) => {

    const [counter,setCounter] = useState<number>(0);
    const [delayTimer,setDelayTimer] = useState<number>(0);
    const [bShowWords,setShowWords] = useState<boolean>(false);
    const [words,setWords] = useState<string>("");
    const [currentWordIndex,setWordIndex] = useState<number>(0);
    const wordArray : string[] | undefined = typeof children === 'string' ? children?.split(' ') : undefined;
    var wordWriter : number;
    
    useEffect(() => {

        // Start the timer and every tick add counter +1 and delayTimer + wordSpeed
      wordWriter = window.setInterval(() => {
        setCounter(counter => counter + 1);
        setDelayTimer(delayTimer => delayTimer + wordSpeed);
      },wordSpeed)

      return () => {
        window.clearInterval(wordWriter);
      };
    }, []);

    useEffect(() => {

        // If the delayTimer in ms has been accumulated over the initialDelay
        // then it can start to show out the words. 
        // But also reset the counter as the counter is the amount of words to show
        if(delayTimer >= initialDelay && !bShowWords)
        {
            setCounter(0);
            setShowWords(true);
        }

    },[delayTimer]);

    useEffect(() => {

        // As counter gets updated, if should show words then proceed into function
        if(bShowWords)
        {
           gradualText();
        }

    },[counter]);



    function gradualText() : void {

        if(wordArray !== undefined)
        {   
            // The initial will have words from index 0 and then update wordIndex
            if(currentWordIndex === 0)
            {
                setWords(wordArray[currentWordIndex]);
                setWordIndex(currentWordIndex => currentWordIndex + 1);
                return;
            }
            // else until the index is within the array length concat the new word to previous ones.
            else if(wordArray.length > currentWordIndex)
            {
                setWords(words => words.concat(" ",wordArray[currentWordIndex]));
                setWordIndex(currentWordIndex => currentWordIndex + 1);
            }
            // If beyond the array length means all words have been revealed, 
            // calling setstate function to tell it is done.
            else
            {
                window.clearInterval(wordWriter);
                setGradualTextDone(true);
            }
         
        }

        return;
    }
    
    return(
        <p style={{fontSize: "18px", color: "white"}}>{words}</p>
        )


}

export default GradualText;