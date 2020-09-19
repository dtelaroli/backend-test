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
`;

module.exports = type;
