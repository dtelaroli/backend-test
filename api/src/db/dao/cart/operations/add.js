const operation = async ({ cartItem, sku, sum, quantity }) => {
  if (sku.inventory < sum + quantity) throw new Error("Quantity unavailable");

  const itemQuantity = cartItem.itemQuantity + quantity;
  return cartItem.update({
    itemQuantity,
    itemAmount: sku.price * itemQuantity,
  });
};

module.exports = operation;
