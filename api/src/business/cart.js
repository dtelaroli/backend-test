const find = async (db, id) => {
  const cart = await db.Cart.findByPk(id);

  if (!cart) {
    return db.Cart.create({ id, totalAmount: 0, totalQuantity: 0 });
  }

  return cart;
};

module.exports = {
  find,
};
