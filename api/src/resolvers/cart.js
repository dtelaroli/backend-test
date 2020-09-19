const resolver = {
  Query: {
    searchCart: async (_source, { id }, { db }) => db.Cart.findByPk(id),
  },
  Mutation: {
    addCartItem: async (_source, { input }, { db }) => db.Cart.create(input),
    updateCartItem: async (_source, { input }, { db }) =>
      db.Cart.update(input, {
        where: {
          id: input.id,
        },
      }),
    deleteCartItem: async (_source, { id }, { db }) =>
      db.Cart.destroy({
        where: {
          id,
        },
      }),
  },
};

module.exports = resolver;
