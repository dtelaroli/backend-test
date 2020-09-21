const { UserInputError } = require("apollo-server");

const operation = async ({ cartItem, sku, quantity }) => {
  if (sku.inventory < quantity) throw new UserInputError("Quantity unavailable", { invalidArgs: { quantity } });

  return cartItem.update({
    itemQuantity: quantity,
    itemAmount: sku.price * quantity,
  });
};

module.exports = operation;
