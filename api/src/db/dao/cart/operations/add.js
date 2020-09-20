const operation = async ({ cartItem, sku, quantity }) => {
  const itemQuantity = cartItem.itemQuantity + quantity;
  return cartItem.update({
    itemQuantity,
    itemAmount: sku.price * itemQuantity,
  });
};

module.exports = operation;
