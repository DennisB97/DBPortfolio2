import React from "react";
import { HeadFC } from "gatsby"
import Layout from "../Components/Layout";
import TerminalLayout from "../Components/2D/TerminalLayout";

/**
 * This component handles the about page, which just gives some text into terminallayout's text props
 */
const TwoDAboutPage = () => {

    return (
        <Layout>
        <TerminalLayout
      asciiPreText={`About Me`}
      contentText={
        `I am Dennis, 25 years old recent graduate from Kajaani University of Applied Sciences, Finland.
        How I ended up pursuing a career in IT, is probably an easy guess after looking at the picture below of me when I was around five years old.
        I have been interested in computers and gadgets since a little child and I have fond memories of happiness that technology has brought me. 
        Some of my leisure activities are travelling, playing guitar, playing video games and eating good food. Below you can see some pictures of my life.`}
      listObjects={[{name:'Choose version', linkTo: '/'},{name:'Home', linkTo: '/2DHome/'},{name:'Projects', linkTo: '/projects/'}]}
      />
        </Layout>
    )
}

export default TwoDAboutPage;


export const Head: HeadFC = () => <title>About Me</title>