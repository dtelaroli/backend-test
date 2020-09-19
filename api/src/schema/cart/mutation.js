const { gql } = require("apollo-server-core");

const type = gql`
  extend type Mutation {
    createProduct(input: CreateProductInput!): Product
    updateProduct(input: UpdateProductInput!): Product
    deleteProduct(id: ID!): ConfirmationResponse
    createSku(input: CreateSkuInput!): Sku
    updateSku(input: UpdateSkuInput!): Sku
    deleteSku(id: ID!): ConfirmationResponse
    addCartItem(input: CartItemInput!): Cart
    updateCartItem(input: CartItemInput!): Cart
    deleteCartItem(id: ID!): ConfirmationResponse
  }
`;

module.exports = type;
