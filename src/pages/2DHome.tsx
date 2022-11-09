import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../Components/Layout";
import TerminalLayout from "../Components/2D/TerminalLayout";


const TwoDHomePage = () => {

    return (
        <Layout>
        <TerminalLayout
      asciiPreText={`Welcome!`}
      contentText={
        `This is my portfolio site where you can find a bit more information about myself, and also take a look at some of my miscellaneous projects.
        Currently on the second iteration of my portfolio site, I also intend to experiment a 3D version utilizing Babylon.js. I used Gatsby and Typescript to create this website.
        `
      }
      listObjects={[{name:'Choose version', linkTo: '/'},{name:'About Me', linkTo: '/2DAbout/'},{name:'Projects', linkTo: '/projects/'}]}
      />
        </Layout>
    )
  }


  export default TwoDHomePage


  export const Head: HeadFC = () => <title>Home</title>