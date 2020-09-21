const { UserInputError } = require("apollo-server");

const operation = async ({ cartItem, sku, quantity }) => {
  if (sku.inventory < cartItem.itemQuantity + quantity)
    throw new UserInputError("Quantity unavailable", { invalidArgs: { quantity } });

  const itemQuantity = cartItem.itemQuantity + quantity;
  return cartItem.update({
    itemQuantity,
    itemAmount: sku.price * itemQuantity,
  });
};

module.exports = operation;
