const operation = async ({ cartItem, sku, quantity }) => {
  if (sku.inventory < quantity) throw new Error("Quantity unavailable");

  return cartItem.update({
    itemQuantity: quantity,
    itemAmount: sku.price * quantity,
  });
};

module.exports = operation;
