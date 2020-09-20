const resolver = {
  Product: {
    skus: async (_source) => _source.getSkus(),
  },
  Query: {
    listProducts: async (_source, _, { db }) => db.Product.findAll(),
  },
  Mutation: {
    createProduct: async (_source, { input }, { db }) => db.Product.create(input),
    updateProduct: async (_source, { input }, { db }) => {
      await db.Product.update(input, {
        where: {
          id: input.id,
        },
      });
      return db.Product.findByPk(input.id);
    },
    deleteProduct: async (_source, { id }, { db }) =>
      db.Product.destroy({
        where: {
          id,
        },
      }),
  },
};

module.exports = resolver;
