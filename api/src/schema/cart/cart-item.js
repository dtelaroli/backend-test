const { gql } = require("apollo-server-core");

const type = gql`
  """
  CartItem is an aggregation of Products in the Cart
  """
  type CartItem {
    id: ID!
    cartId: ID!
    skuId: ID!
    """
    Quantity total of Product, grouped by Sku
    """
    itemQuantity: Int!
    """
    Total amount of Products, grouped by Sku
    """
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

  input DeleteCartItemInput {
    cartId: ID
    skuId: ID!
  }

  extend type Mutation {
    """
     Add one item to CartItem, increasing the quantity case the Sku already exists in the Cart
    """
    addCartItem(input: CartItemInput!): Cart
    """
     Update CartItem quantity, if the CartItem does not exists, it will be same addCartItem workflow
    """
    updateCartItem(input: CartItemInput!): Cart
    """
     Delete a CartItem
    """
    deleteCartItem(input: DeleteCartItemInput!): Cart
  }
`;

module.exports = type;
