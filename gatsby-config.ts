import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DBPortfolio2`,
    siteUrl: `https://www.dennisb.me`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image","gatsby-transformer-typescript-css-modules", 
 {
  resolve: "gatsby-plugin-mdx",
  options: {
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
          withAvif: false,
          withWebp: true,
          showCaptions: false,
          quality: 90,
          backgroundColor: "transparent",
          linkImagesToOriginal: false
        },
      },
    ],
  },}, 
  {
   resolve: "gatsby-plugin-sharp",
   options: {
    defaults: {
      formats: [`png`,`webp`]
   }, 
    
  },}, "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
    },{
    resolve: 'gatsby-source-filesystem',
   options: {
       "name": "projects",
       "path": `${__dirname}/src/projects`
    },
   __key: "projects"
   },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`,`https://fonts.gstatic.com`],
      web: [
        {
          name: `Roboto Slab`,
          file: `https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap`,
        },
      ],
    },
  },
],
trailingSlash: "always",
};

export default config;
