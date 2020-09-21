const { transactional } = require("../../utils");

const operation = async ({ CartItem, Sku, sequelize }, { cartId, skuId, quantity }, operation) => {
  return transactional(sequelize, async () => {
    let cartItem = await CartItem.findOne({
      where: {
        cartId,
        skuId,
      },
    });

    const sku = await Sku.findByPk(skuId);

    if (cartItem) {
      const sum = await CartItem.sum("itemQuantity", { where: { cartId, skuId } });
      cartItem = await operation({ cartItem, sku, sum, quantity });
    } else {
      if (sku.inventory < quantity) throw new Error("Quantity unavailable");
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

module.exports = operation;
