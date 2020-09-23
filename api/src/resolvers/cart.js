const { cartDAO } = require("../db/dao");

const resolver = {
  Cart: {
    items: async (_source) => _source.getCartItems(),
  },
  CartItem: {
    sku: async (_source) => _source.getSku(),
  },
  Query: {
    getCart: async (_source, { id }, { db }) => cartDAO.findOrCreate(db, id),
  },
  Mutation: {
    addCartItem: async (_source, { input }, { db }) => cartDAO.addItem(db, input),
    updateCartItem: async (_source, { input }, { db }) => cartDAO.updateItem(db, input),
    deleteCartItem: async (_source, { input }, { db }) => cartDAO.deleteItem(db, input),
  },
};

module.exports = resolver;
