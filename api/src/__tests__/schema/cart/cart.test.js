const { CART } = require("../../../db/seeders/consts");
const {
  queries: { GET_CART },
} = require("../graphql");
const { seed, query } = require("../../helpers");

describe("Query", () => {
  beforeEach(() => {
    seed();
  });

  describe("getCart", () => {
    it("Should return cart if exists", async () => {
      const result = await query({
        query: GET_CART,
        variables: { id: CART.id },
      });

      expect(result).toMatchSnapshot();
    });
  });
});
