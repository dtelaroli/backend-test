const { seed, mutate, query } = require("../../helpers");

const { PRODUCT, PRODUCT_UPDATE, PRODUCT_DELETE } = require("../../../db/seeders/20200923034056-product");

const {
  queries: { LIST_PRODUCTS },
  mutations: { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT },
} = require("../graphql");

describe("Sku", () => {
  beforeEach(() => {
    seed("20200923034056-product");
  });

  describe("Query", () => {
    describe("listProducts", () => {
      it("Should list all products", async () => {
        const result = await query({
          query: LIST_PRODUCTS,
        });

        expect(result.data.listProducts.length).toBeGreaterThan(1);
      });
    });
  });

  describe("Mutation", () => {
    const ID = "11111111-1111-1111-1111-111111111110";

    describe("createProduct", () => {
      it("Should create product", async () => {
        const result = await mutate({
          mutation: CREATE_PRODUCT,
          variables: {
            input: PRODUCT,
          },
        });

        expect(result).toMatchSnapshot();
      });

      it("Should delete product", async () => {
        const result = await mutate({
          mutation: DELETE_PRODUCT,
          variables: {
            id: PRODUCT_DELETE.id,
          },
        });

        expect(result).toMatchSnapshot();
      });

      it("Should update product", async () => {
        const result = await mutate({
          mutation: UPDATE_PRODUCT,
          variables: {
            input: {
              id: PRODUCT_UPDATE.id,
              name: "product3",
              image: "image1.jpg",
            },
          },
        });

        expect(result).toMatchSnapshot();
      });
    });
  });
});
