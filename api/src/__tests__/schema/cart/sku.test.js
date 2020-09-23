const { seed, mutate } = require("../../helpers");
const {
  mutations: { CREATE_SKU, UPDATE_SKU, DELETE_SKU },
} = require("../graphql");

const seedData = require("../../../db/seeders/20200923032202-sku");
const { SKU, SKU_UPDATE, SKU_DELETE } = seedData;

describe("Sku", () => {
  beforeEach(() => {
    seed("20200923032202-sku");
  });

  describe("Mutation", () => {
    describe("createSku", () => {
      it("Should create sku", async () => {
        const result = await mutate({
          mutation: CREATE_SKU,
          variables: {
            input: SKU,
          },
        });

        expect(result).toMatchSnapshot();
      });

      it("Should delete sku", async () => {
        const result = await mutate({
          mutation: DELETE_SKU,
          variables: {
            id: SKU_DELETE.id,
          },
        });

        expect(result).toMatchSnapshot();
      });

      it("Should update sku", async () => {
        const result = await mutate({
          mutation: UPDATE_SKU,
          variables: {
            input: {
              id: SKU_UPDATE.id,
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
