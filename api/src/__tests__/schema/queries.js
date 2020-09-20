const { gql } = require("apollo-server-core");

const GET_CART = gql`
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      totalQuantity
      totalAmount
      createdAt
      updatedAt
      items {
        id
        cartId
        skuId
        sku {
          id
          sku
          inventory
          price
        }
        itemQuantity
        itemAmount
      }
    }
  }
`;

module.exports = {
  GET_CART,
};
