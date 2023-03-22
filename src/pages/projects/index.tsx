import React, { useState } from 'react';
import { graphql, HeadFC } from 'gatsby';
import Layout from '../../Components/Layout';
import TerminalLayout from '../../Components/2D/TerminalLayout';
import ProjectDisplayBox from '../../Components/2D/ProjectDisplayBox';
import { CategoryBar } from '../../Components/2D/CategoryBar';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface MdxNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    category: string[];
    projectName: string;
    thumbnailImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

/**
 * This component renders the project page, which contains the categorybar, and makes a list of all mdx files
 * And makes a displaybox out of the projects which works as a button.
 * @param data data is received from the mdx query and contains all the found mdx files.
 */
const TwoDProjectsPage = ({ data }: any) => {
  const [currentCategory, setCategory] = useState<string>('All');

  // If currentcategory is all then show all projects else only those with same category as current category.
  var sortedProjects: MdxNode[] = [];
  data.allMdx.nodes.forEach((node: MdxNode) => {
    if (currentCategory === 'All') {
      sortedProjects.push(node);
    } else if (
      node.frontmatter.category.includes(
        currentCategory !== undefined ? currentCategory : 'Not found'
      )
    ) {
      sortedProjects.push(node);
    }
  });

  return (
    <Layout>
      <TerminalLayout
        asciiPreText={`Projects`}
        listObjects={[
          { name: 'Choose version', linkTo: '/' },
          { name: 'Home', linkTo: '/2DHome/' },
          { name: 'About Me', linkTo: '/2DAbout/' },
        ]}
        children={
          <>
            <CategoryBar
              currentCategory={currentCategory}
              setCategory={setCategory}
            ></CategoryBar>
            {sortedProjects.map((node: MdxNode) => (
              <ProjectDisplayBox
                key={node.frontmatter.projectName}
                linkTo={node.fields.slug}
                imageData={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData}
                imageAlt={node.frontmatter.projectName}
              ></ProjectDisplayBox>
            ))}
          </>
        }
      />
    </Layout>
  );
};

export default TwoDProjectsPage;

export const projectsQuery = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { importance: ASC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          category
          projectName
          thumbnailImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 90
                formats: [WEBP, AVIF]
                blurredOptions: { width: 100 }
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Projects</title>;
