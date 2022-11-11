import { IGatsbyImageData} from "gatsby-plugin-image";

/**
 *  Interface for array of pictures queried with graphql
 */
 export interface ImageObject{
    id: string;
    altText: string;
    imageData?: IGatsbyImageData;
}


export interface ImageObjects extends Array<ImageObject>{}