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

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      image
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeteteProduct($id: ID!) {
    deleteProduct(id: $id) {
      message
    }
  }
`;

module.exports = {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
};
