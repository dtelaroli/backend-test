const { CART_CREATE, CART_UPDATE, CART_DELETE, SKU } = require("../../../db/seeders/20200922000936-cart-item");
const {
  mutations: { ADD_CART_ITEM, UPDATE_CART_ITEM, DELETE_CART_ITEM },
} = require("../graphql");
const { seed, mutate } = require("../../helpers");

describe("CartItem", () => {
  beforeEach(() => {
    seed("20200922000936-cart-item");
  });

  describe("Mutation", () => {
    it("Should create cart item", async () => {
      const result = await mutate({
        mutation: ADD_CART_ITEM,
        variables: {
          input: {
            cartId: CART_CREATE.id,
            skuId: SKU.id,
            quantity: 10,
          },
        },
      });

      expect(result).toMatchSnapshot();
    });
  });

  it("Should update cart item", async () => {
    const result = await mutate({
      mutation: UPDATE_CART_ITEM,
      variables: {
        input: {
          cartId: CART_UPDATE.id,
          skuId: SKU.id,
          quantity: 1,
        },
      },
    });

    expect(result).toMatchSnapshot();
  });

  it("Should delete cart item", async () => {
    const result = await mutate({
      mutation: DELETE_CART_ITEM,
      variables: {
        input: {
          cartId: CART_DELETE.id,
          skuId: SKU.id,
        },
      },
    });

    expect(result).toMatchSnapshot();
  });
});
