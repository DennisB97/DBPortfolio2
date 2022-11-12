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


const pathsToIgnore = ['/3DHome/']
exports.onCreatePage = ({ page, actions: { deletePage, createPage }} : any) => {

  deletePage(page);

  createPage({
    ...page,
    context: {
      ...page.context,
      imageFolder: "projectimages/" + page.context.fields__slug,
    },
  });

  console.log(page);

  if (process.env.NODE_ENV === 'development') return
  
  if (pathsToIgnore.includes(page.fields.slug)) {
    deletePage(page)
  }
}