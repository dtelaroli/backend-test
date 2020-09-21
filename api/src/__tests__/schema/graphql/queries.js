const { gql } = require("apollo-server-core");

const GET_CART = gql`
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      totalQuantity
      totalAmount
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

const LIST_PRODUCTS = gql`
  query ListProducts {
    listProducts {
      id
      name
      image
    }
  }
`;

module.exports = {
  GET_CART,
  LIST_PRODUCTS,
};
