// Copyright 2022 Dennis Baeckstroem 
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../../Components/Layout";
import TerminalLayout from "../../Components/2D/TerminalLayout";
import { HeadFC } from "gatsby"
import GradualText from "../../Components/2D/GradualText";
import AsciiText from "../../Components/2D/AsciiText";
import VideoFrame from "../../Components/2D/VideoFrame";

const shortcodes = { Link, GradualText,AsciiText,VideoFrame,
  p: (props : any)  => <p {...props} style={{color: "white", fontFamily: "Roboto Slab"}} />
} 

// Project is a dynamic page component
// Shows the mdx file contnet as a project page for each project
const Project = ({ data, children } : any) => {

  return(
    <Layout>
    <TerminalLayout
    bAnimatedPreAscii={false}
    listObjects={[{name:'Choose version', linkTo: '/'},{name:'Home', linkTo: '/2DHome/'},{name:'About Me', linkTo: '/2DAbout/'},{name:'Projects', linkTo: '/projects/'}]}>
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
      </TerminalLayout>
    </Layout>
    )

}

export const query = graphql`
  query ($id: String) {
   page: mdx(id: {eq: $id}) {
      frontmatter {
        title
        category
        importance
        projectName
        videoSrcURL
        videoTitle
      }
      body
    }
   } `


export default Project;



export const Head: HeadFC = ({data, children} : any) => <title>{data.page.frontmatter.projectName}</title>