const resolver = {
  Sku: {
    product: async (_source) => _source.getProduct(),
  },
  Mutation: {
    createSku: async (_source, { input }, { db }) => db.Sku.create(input),
    updateSku: async (_source, { input }, { db }) => db.Sku.patch(input),
    deleteSku: async (_source, { id }, { db }) => db.Sku.remove(id),
  },
};

module.exports = resolver;
