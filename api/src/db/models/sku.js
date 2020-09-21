"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sku.belongsTo(models.Product, { foreignKey: "productId" });
    }

    static async patch(input) {
      await Sku.update(input, {
        where: {
          id: input.id,
        },
      });
      return Sku.findByPk(input.id);
    }

    static async remove(id) {
      await Sku.destroy({
        where: {
          id,
        },
      });
      return { message: "Sku removed" };
    }
  }
  Sku.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      sku: DataTypes.STRING,
      inventory: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(10, 2),
      productId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Sku",
    }
  );
  return Sku;
};
