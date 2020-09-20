const operation = async ({ cartItem }) => {
  await cartItem.destroy();
  return cartItem;
};

module.exports = operation;
