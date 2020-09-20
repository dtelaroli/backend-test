const operation = require("./operation");
const operations = require("./operations");

const find = async ({ Cart }, id) => {
  const cart = await Cart.findByPk(id);

  if (!cart) {
    return Cart.create({ id, totalAmount: 0, totalQuantity: 0 });
  }

  return cart;
};

const items = {};
["addItem", "updateItem", "deleteItem"].forEach((name) => {
  items[name] = async (db, input) => operation(db, input, operations[name]);
});

module.exports = {
  find,
  ...items,
};
