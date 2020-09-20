const _ = require("lodash");

const resolver = {
  Sku: {
    product: async (_source) => _source.getProduct(),
  },
  Mutation: {
    createSku: async (_source, { input }, { db }) => db.Sku.create(input),
    updateSku: async (_source, { input }, { db }) => {
      await db.Sku.update(input, {
        where: {
          id: input.id,
        },
      });
      return db.Sku.findByPk(input.id);
    },
    deleteSku: async (_source, { id }, { db }) =>
      db.Sku.destroy({
        where: {
          id,
        },
      }),
  },
};

module.exports = resolver;
