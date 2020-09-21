const { seed, mutate } = require("../../helpers");

const {
  mutations: { CREATE_PRODUCT },
} = require("../graphql");

describe("Mutation", () => {
  beforeEach(() => {
    seed();
  });

  describe("createProduct", () => {
    it("Should return cart if exists", async () => {
      const result = await mutate({
        mutation: CREATE_PRODUCT,
        variables: {
          input: {
            id: "11111111-1111-1111-1111-111111111110",
            name: "product2",
            image: "image1.jpg",
          },
        },
      });

      expect(result).toMatchSnapshot();
    });
  });
});
