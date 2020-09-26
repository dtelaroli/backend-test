const { gql } = require("apollo-server-core");

const type = gql`
  """
  Root Query
  """
  type Query {
    _: Boolean
  }

  """
  Root Mutation
  """
  type Mutation {
    _: Boolean
  }

  """
  Default message response
  """
  type ConfirmationResponse {
    message: String!
  }
`;

module.exports = [type];
