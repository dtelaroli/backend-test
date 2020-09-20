const { gql } = require("apollo-server-core");

const type = gql`
  type Product {
    id: ID!
    name: String!
    image: String!
    createdAt: DateTime
    updatedAt: DateTime
    skus: [Sku]
  }

  input CreateProductInput {
    id: ID
    name: String!
    image: String!
    createdAt: String
    updatedAt: String
  }

  input UpdateProductInput {
    id: ID!
    name: String
    image: String
    createdAt: String
    updatedAt: String
  }

  extend type Mutation {
    createProduct(input: CreateProductInput!): Product
    updateProduct(input: UpdateProductInput!): Product
    deleteProduct(id: ID!): ConfirmationResponse
  }

  extend type Query {
    listProducts: [Product]
  }
`;

module.exports = type;
