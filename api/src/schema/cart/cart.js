const { gql } = require("apollo-server-core");

const type = gql`
  """
  A Cart is a group of Product items, grouped by Sku
  """
  type Cart {
    id: ID!
    """
    Sum of all CartItem.itemAmount
    """
    totalAmount: Float!
    """
    Sum of all CartItem.itemQuantity
    """
    totalQuantity: Int!
    createdAt: DateTime
    updatedAt: DateTime
    """
    List of CartItems
    """
    items: [CartItem]
  }

  input CreateCartInput {
    id: ID
    totalAmount: Float!
    countItems: Int!
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    """
     Recovery a Cart Item by ID
    """
    getCart(id: ID!): Cart
  }
`;

module.exports = type;
