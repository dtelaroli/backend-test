const operation = async ({ cartItem, sku, quantity }) => {
  return cartItem.update({
    itemQuantity: quantity,
    itemAmount: sku.price * quantity,
  });
};

module.exports = operation;
