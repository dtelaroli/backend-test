"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Sku, { foreignKey: "skuId" });
      CartItem.belongsTo(models.Cart, { foreignKey: "cartId" });
    }
  }
  CartItem.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      itemQuantity: DataTypes.INTEGER,
      itemAmount: DataTypes.DECIMAL,
      cartId: DataTypes.UUID,
      skuId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );
  return CartItem;
};
