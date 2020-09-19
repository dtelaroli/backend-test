const { gql } = require("apollo-server-core");

const type = gql`
  type Cart {
    id: ID!
    totalAmount: Float!
    countItems: Int!
    createdAt: DateTime
    updatedAt: DateTime
    items: [CartItem]
  }

  type CartItem {
    id: ID!
    sku: Sku!
    quantity: Int!
    itemAmount: Float!
  }

  input CartItemInput {
    skuId: ID!
    quantity: Int!
  }
`;

module.exports = type;
