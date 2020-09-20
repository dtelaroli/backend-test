const { ApolloServer } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");
const { prepareTests } = require("../../../db/utils");
const { CART_EMPTY, CART, SKU, CART_ITEM_1, CART_ITEM_2 } = require("../../../db/seeders/config");

const { GET_CART } = require("../queries");
const config = require("../../../config");
const server = new ApolloServer(config.gql);

const { query, mutate } = createTestClient(server);

describe("Query", () => {
  beforeEach(() => {
    prepareTests.seed();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getCart", () => {
    it("Should return cart if exists", async () => {
      const result = await query({
        query: GET_CART,
        variables: { id: CART.id },
      });

      expect(result).not.toBe(null);
      expect(result.data.getCart.items.length).toBe(2);
    });
  });
});

// mutate({
//   mutation: UPDATE_USER,
//   variables: { id: 1, email: "nancy@foo.co" },
// });
