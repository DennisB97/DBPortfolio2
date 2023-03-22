import { IGatsbyImageData } from 'gatsby-plugin-image';

/**
 *  Interface for array of pictures queried with graphql
 */
export interface ImageObject {
  id: string;
  altText: string;
  imageData?: IGatsbyImageData;
}

export interface MdxImageNode {
  node: {
    id: string;
    base: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}