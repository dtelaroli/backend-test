"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.hasMany(models.CartItem, { foreignKey: "cartId" });
    }
  }
  Cart.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      totalQuantity: DataTypes.INTEGER,
      totalAmount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
