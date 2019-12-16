const interfaceDefinition = require("./index.js");

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes(
    schema.buildInterfaceType(interfaceDefinition)
  );
};
