const { gql } = require("apollo-server-core");

const type = gql`
  type CartItem {
    id: ID!
    cartId: ID!
    skuId: ID!
    itemQuantity: Int!
    itemAmount: Float!
    createdAt: DateTime
    updatedAt: DateTime
    sku: Sku
  }

  input CartItemInput {
    cartId: ID
    skuId: ID!
    quantity: Int!
  }

  extend type Mutation {
    addCartItem(input: CartItemInput!): Cart
    updateCartItem(input: CartItemInput!): Cart
    deleteCartItem(id: ID!): ConfirmationResponse
  }
`;

module.exports = type;
