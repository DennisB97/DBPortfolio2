const { createFilePath } = require('gatsby-source-filesystem');
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } } : any) => {
  if (node.internal.type === 'Mdx') {

    var path : string = createFilePath({ node, getNode });
    path = path.replaceAll(`/`,``);
    createNodeField({
      node,
      name: 'slug',
      value: path,
    });
  }
};
