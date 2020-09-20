const { cartDAO } = require("../db/dao");

const resolver = {
  Cart: {
    items: async (_source) => _source.getCartItems(),
  },
  CartItem: {
    sku: async (_source) => _source.getSku(),
  },
  Query: {
    getCart: async (_source, { id }, { db }) => cartDAO.find(db, id),
  },
  Mutation: {
    addCartItem: async (_source, { input }, { db }) => cartDAO.addItem(db, input),
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
