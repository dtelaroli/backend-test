const { CART } = require("../../../db/seeders/consts");
const {
  queries: { GET_CART },
} = require("../graphql");
const { seed, query } = require("../../helpers");

describe("Cart", () => {
  beforeEach(() => {
    seed();
  });
  describe("Query", () => {
    describe("getCart", () => {
      it("Should return cart if exists", async () => {
        const result = await query({
          query: GET_CART,
          variables: { id: CART.id },
        });

        expect(result).toMatchSnapshot();
      });

      it("Should return a new cart if does not exists", async () => {
        const result = await query({
          query: GET_CART,
          variables: { id: "123" },
        });

        expect(result).toMatchSnapshot();
      });
    });
  });
});
