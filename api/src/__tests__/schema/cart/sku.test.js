const { seed, mutate } = require("../../helpers");
const { SKU, PRODUCT } = require("../../../db/seeders/consts");

const {
  mutations: { CREATE_SKU, UPDATE_SKU, DELETE_SKU },
} = require("../graphql");

describe("Sku", () => {
  beforeEach(() => {
    seed();
  });

  describe("Mutation", () => {
    const ID = "11111111-1111-1111-1111-111111111110";

    describe("createSku", () => {
      it("Should create and delete sku", async () => {
        const create = await mutate({
          mutation: CREATE_SKU,
          variables: {
            input: {
              id: ID,
              sku: "S123",
              inventory: 10,
              price: 9.99,
              productId: PRODUCT.id,
            },
          },
        });

        const destroy = await mutate({
          mutation: DELETE_SKU,
          variables: {
            id: ID,
          },
        });

        expect({ create, destroy }).toMatchSnapshot();
      });

      it("Should update sku", async () => {
        const result = await mutate({
          mutation: UPDATE_SKU,
          variables: {
            input: {
              id: SKU.id,
              sku: "S123",
              inventory: 5,
              price: 4.12,
            },
          },
        });

        expect(result).toMatchSnapshot();
      });
    });
  });
});
