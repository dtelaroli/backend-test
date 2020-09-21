const { seed, mutate } = require("../../helpers");
const { PRODUCT } = require("../../../db/seeders/consts");

const {
  mutations: { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT },
} = require("../graphql");

describe("Mutation", () => {
  beforeEach(() => {
    seed();
  });

  const ID = "11111111-1111-1111-1111-111111111110";

  describe("createProduct", () => {
    it("Should create and delete product", async () => {
      const create = await mutate({
        mutation: CREATE_PRODUCT,
        variables: {
          input: {
            id: ID,
            name: "product2",
            image: "image1.jpg",
          },
        },
      });

      const destroy = await mutate({
        mutation: DELETE_PRODUCT,
        variables: {
          id: ID,
        },
      });

      expect({ create, destroy }).toMatchSnapshot();
    });

    it("Should update product", async () => {
      const result = await mutate({
        mutation: UPDATE_PRODUCT,
        variables: {
          input: {
            id: PRODUCT.id,
            name: "product3",
            image: "image1.jpg",
          },
        },
      });

      expect(result).toMatchSnapshot();
    });
  });
});
