const {
  queries: { GET_CART },
} = require("../graphql");
const { CART } = require("../../../db/seeders/20200919151449-cart");
const { seed, query } = require("../../helpers");

describe("Cart", () => {
  beforeEach(() => {
    seed("20200919151449-cart");
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
