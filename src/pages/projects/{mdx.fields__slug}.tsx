// Copyright 2022 Dennis Baeckstroem
import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Layout from '../../Components/Layout';
import TerminalLayout from '../../Components/2D/TerminalLayout';
import GradualText from '../../Components/2D/GradualText';
import AsciiText from '../../Components/2D/AsciiText';
import VideoFrame from '../../Components/2D/VideoFrame';
import PictureCarousel from '../../Components/2D/PictureCarousel';
import { ImageObject,MdxImageNode } from '../../interfaces/picturedata.interface';
import * as MarkDownStyles from '../../styles/markdown.module.css';

// The shortcodes are components that are forwarded to the markdown files
const shortcodes = {
  Link,
  GradualText,
  AsciiText,
  VideoFrame,
  p: (props: any) => (
    <p
      {...props}
      className={MarkDownStyles.markDownDefault}
    />
  ),

  ul: (props: any) => (
    <ul
      {...props}
      className={MarkDownStyles.markDownList}
    />
  )

};


/**
 * Project component is a template for dynamically creating pages out of the mdx files inside projects folder.
 * Uses same layouts as the manually created pages, and then puts the body content of mdx files into children of the terminallayout.
 * @param children props from the mdx query given to be rendered within the terminallayout component.
 * @param data image data from mdx query given to be rendered within the terminallayout component.
 */
const Project = ({ children, data }: any) => {
  var carouselData: ImageObject[] = [];
  if (data.allFile.edges.length > 0) {
    data.allFile.edges.forEach((edge: MdxImageNode) => {
      let imageData: ImageObject = {
        id: edge.node.id,
        altText: edge.node.base,
        imageData: edge.node.childImageSharp.gatsbyImageData,
      };
      carouselData.push(imageData);
    });
  }

  return (
    <Layout>
      <TerminalLayout
        bAnimatedPreAscii={false}
        listObjects={[
          { name: 'Choose version', linkTo: '/' },
          { name: 'Home', linkTo: '/2DHome/' },
          { name: 'About Me', linkTo: '/2DAbout/' },
          { name: 'Projects', linkTo: '/projects/' },
        ]}
      >
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
        {data.allFile.edges.length > 0 ? (
          <PictureCarousel images={carouselData}></PictureCarousel>
        ) : null}
      </TerminalLayout>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $imageFolder: String) {
    page: mdx(id: { eq: $id }) {
      frontmatter {
        projectName
      }
    }
    allFile(filter: { relativeDirectory: { eq: $imageFolder } }) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 90
              formats: [WEBP, AVIF]
              blurredOptions: { width: 100 }
              transformOptions: { fit: CONTAIN }
              backgroundColor: "transparent"
              height: 1920
              width: 1920
            )
          }
        }
      }
    }
  }
`;

export default Project;

export const Head: HeadFC = ({ data }: any) => (
  <title>{data.page.frontmatter.projectName}</title>
);
