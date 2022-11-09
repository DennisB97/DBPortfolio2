// Copyright 2022 Dennis Baeckstroem 
import React from "react"
import { graphql, HeadFC} from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../../Components/Layout";
import TerminalLayout from "../../Components/2D/TerminalLayout";
import GradualText from "../../Components/2D/GradualText";
import AsciiText from "../../Components/2D/AsciiText";
import VideoFrame from "../../Components/2D/VideoFrame";

// The shortcodes are components that are forwarded to the markdown files
const shortcodes = { Link, GradualText,AsciiText,VideoFrame,
  p: (props : any)  => <p {...props} style={{color: "white", fontFamily: "Roboto Slab"}} />
} 

/**
 * Project component is a template for dynamically creating pages out of the mdx files inside projects folder.
 * Uses same layouts as the manually created pages, and then puts the body content of mdx files into children of the terminallayout.
 * @param param children props from the mdx query given to be rendered within the terminallayout component.
 */
const Project = ({children } : any) => {

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
    }
   } `


export default Project;



export const Head: HeadFC = ({data, children} : any) => <title>{data.page.frontmatter.projectName}</title>