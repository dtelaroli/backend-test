const { gql } = require("apollo-server-core");

const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      image
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      image
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeteteProduct($id: ID!) {
    deleteProduct(id: $id) {
      message
    }
  }
`;

const CREATE_SKU = gql`
  mutation CreateSku($input: CreateSkuInput!) {
    createSku(input: $input) {
      id
      sku
      inventory
      price
      product {
        id
      }
    }
  }
`;

const UPDATE_SKU = gql`
  mutation UpdateSku($input: UpdateSkuInput!) {
    updateSku(input: $input) {
      id
      sku
      inventory
      price
      product {
        id
      }
    }
  }
`;

const DELETE_SKU = gql`
  mutation DeleteSku($id: ID!) {
    deleteSku(id: $id) {
      message
    }
  }
`;

const ADD_CART_ITEM = gql`
  mutation AddCartItem($input: CartItemInput!) {
    addCartItem(input: $input) {
      id
      totalQuantity
      totalAmount
      items {
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

const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($input: CartItemInput!) {
    updateCartItem(input: $input) {
      id
      totalQuantity
      totalAmount
      items {
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

const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($input: DeleteCartItemInput!) {
    deleteCartItem(input: $input) {
      id
      totalQuantity
      totalAmount
      items {
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
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_SKU,
  UPDATE_SKU,
  DELETE_SKU,
  ADD_CART_ITEM,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
};
