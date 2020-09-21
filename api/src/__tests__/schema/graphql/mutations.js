const { gql } = require("apollo-server-core");

const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      image
    }
  }
`;

module.exports = {
  CREATE_PRODUCT,
};
