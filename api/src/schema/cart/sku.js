const { gql } = require("apollo-server-core");

const type = gql`
  type Sku {
    id: ID!
    sku: String!
    inventory: Int!
    price: Float!
    createdAt: DateTime
    updatedAt: DateTime
    product: Product
  }

  input CreateSkuInput {
    id: ID
    sku: String!
    inventory: Int!
    price: Float!
    productId: ID!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UpdateSkuInput {
    id: ID!
    sku: String
    inventory: Int
    price: Float
    productId: ID
    createdAt: DateTime
    updatedAt: DateTime
  }

  extend type Mutation {
    createSku(input: CreateSkuInput!): Sku
    updateSku(input: UpdateSkuInput!): Sku
    deleteSku(id: ID!): ConfirmationResponse
  }
`;

module.exports = type;
