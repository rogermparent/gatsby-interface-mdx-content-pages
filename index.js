const { fields: contentPageFields } = require("gatsby-interface-content-pages");

module.exports = {
  name: "IMdxContentPage",
  fields: {
    ...contentPageFields,
    frontmatter: {
      type: `MdxFrontmatter!`
    },
    body: {
      type: `String!`
    }
  }
};
