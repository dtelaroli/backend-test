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

const CREATE_SKU = gql`
  mutation CreateSku($input: CreateSkuInput!) {
    createSku(input: $input) {
      id
      sku
      inventory
      price
      product {
        id
        name
        image
      }
    }
  }
`;

const UPDATE_SKU = gql`
  mutation UpdateSku($input: UpdateSkuInput!) {
    updateSku(input: $input) {
      id
      sku
      inventory
      price
      product {
        id
        name
        image
      }
    }
  }
`;

const DELETE_SKU = gql`
  mutation DeleteSku($id: ID!) {
    deleteSku(id: $id) {
      message
    }
  }
`;

module.exports = {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_SKU,
  UPDATE_SKU,
  DELETE_SKU,
};
