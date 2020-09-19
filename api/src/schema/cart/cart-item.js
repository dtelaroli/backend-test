const { gql } = require("apollo-server-core");

const type = gql`
  type CartItem {
    id: ID!
    cartId: ID!
    skuId: ID!
    quantity: Int!
    itemAmount: Float!
    createdAt: DateTime
    updatedAt: DateTime
    sku: Sku
  }

  input CartItemInput {
    skuId: ID!
    quantity: Int!
  }
`;

module.exports = type;
