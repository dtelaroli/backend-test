const resolver = {
  Mutation: {
    createSku: async (_source, { input }, { db }) => db.Sku.create(input),
    updateSku: async (_source, { input }, { db }) =>
      db.Sku.update(input, {
        where: {
          id: input.id,
        },
      }),
    deleteSku: async (_source, { id }, { db }) =>
      db.Sku.destroy({
        where: {
          id,
        },
      }),
  },
};

module.exports = resolver;
