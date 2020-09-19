const { gql } = require("apollo-server-core");
const directives = require("../directives");

const type = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type ConfirmationResponse {
    message: String!
  }
`;

module.exports = [type, ...directives];
