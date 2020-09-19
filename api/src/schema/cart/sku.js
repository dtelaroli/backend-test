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
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UpdateSkuInput {
    id: ID!
    sku: String!
    inventory: Int!
    price: Float!
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

module.exports = type;
