"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Sku, {
        foreignKey: "productId",
      });
    }

    static async patch(input) {
      await Product.update(input, {
        where: {
          id: input.id,
        },
      });
      return Product.findByPk(input.id);
    }

    static async remove(id) {
      await Product.destroy({
        where: {
          id
        },
      });
      return { message: "Product removed" };
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
