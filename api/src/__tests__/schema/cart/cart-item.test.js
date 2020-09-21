const { PRODUCT } = require("../../../db/seeders/consts");
const {
  queries: { GET_CART },
  mutations: { ADD_CART_ITEM, UPDATE_CART_ITEM, DELETE_CART_ITEM, CREATE_SKU },
} = require("../graphql");
const { seed, mutate, query } = require("../../helpers");

describe("CartItem", () => {
  beforeEach(() => {
    seed();
  });

  describe("Mutation", () => {
    it("Should create cart, add, update and remove a item to cart", async () => {
      const get = await query({
        mutation: GET_CART,
        variables: {
          id: "321",
        },
      });

      const createSku = await mutate({
        mutation: CREATE_SKU,
        variables: {
          input: {
            id: "321",
            sku: "S123",
            inventory: 10,
            price: 9.99,
            productId: PRODUCT.id,
          },
        },
      });

      const cart = get.data.getCart;
      const sku = createSku.data.createSku;

      const add = await mutate({
        mutation: ADD_CART_ITEM,
        variables: {
          input: {
            cartId: cart.id,
            skuId: sku.id,
            quantity: 10,
          },
        },
      });

      const update = await mutate({
        mutation: UPDATE_CART_ITEM,
        variables: {
          input: {
            cartId: cart.id,
            skuId: sku.id,
            quantity: 1,
          },
        },
      });

      const remove = await mutate({
        mutation: DELETE_CART_ITEM,
        variables: {
          input: {
            cartId: cart.id,
            skuId: sku.id,
          },
        },
      });

      expect({ get, add, update, remove }).toMatchSnapshot();
    });
  });
});
