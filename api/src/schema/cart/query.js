const { gql } = require("apollo-server-core");

const type = gql`
  extend type Query {
    searchProduct(filter: SearchFilter): [Product]
  }

  input SearchFilter {
    id: ID!
  }
`;

module.exports = type;
