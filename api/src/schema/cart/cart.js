const { gql } = require("apollo-server-core");

const type = gql`
  type Cart {
    id: ID!
    totalAmount: Float!
    totalQuantity: Int!
    createdAt: DateTime
    updatedAt: DateTime
    items: [CartItem]
  }

  input CreateCartInput {
    id: ID
    totalAmount: Float!
    countItems: Int!
    createdAt: String
    updatedAt: String
  }
`;

module.exports = type;
