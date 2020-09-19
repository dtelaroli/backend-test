const resolver = {
  Mutation: {
    createProduct: async (_source, { input }, { db }) => db.Product.create(input),
    updateProduct: async (_source, { input }, { db }) =>
      db.Product.update(input, {
        where: {
          id: input.id,
        },
      }),
    deleteProduct: async (_source, { id }, { db }) =>
      db.Product.destroy({
        where: {
          id,
        },
      }),
  },
};

module.exports = resolver;
