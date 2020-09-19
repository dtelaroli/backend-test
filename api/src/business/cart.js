const { transactional } = require("../db/utils");

const find = async ({ Cart }, id) => {
  const cart = await Cart.findByPk(id);

  if (!cart) {
    return Cart.create({ id, totalAmount: 0, totalQuantity: 0 });
  }

  return cart;
};

const addItem = async ({ CartItem, Sku, sequelize }, { cartId, skuId, quantity }) => {
  return transactional(sequelize, async () => {
    let cartItem = await CartItem.findOne({
      where: {
        cartId,
        skuId,
      },
    });

    const sku = await Sku.findByPk(skuId);
    if (cartItem) {
      const itemQuantity = cartItem.itemQuantity + quantity;
      const itemAmount = sku.price * itemQuantity;
      cartItem = await cartItem.update({
        itemQuantity,
        itemAmount,
      });
    } else {
      const itemAmount = sku.price * quantity;
      cartItem = await CartItem.create({
        cartId,
        skuId,
        itemQuantity: quantity,
        itemAmount,
      });
    }

    const cart = await cartItem.getCart();
    const items = await cart.getCartItems();
    const body = items.reduce(
      (prev, current) => ({
        totalQuantity: current.itemQuantity + prev.totalQuantity,
        totalAmount: current.itemAmount + prev.totalAmount,
      }),
      { totalQuantity: 0, totalAmount: 0 }
    );

    return cart.update(body);
  });
};

module.exports = {
  find,
  addItem,
};
