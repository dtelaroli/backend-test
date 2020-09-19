"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CartItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      itemAmount: {
        type: Sequelize.DECIMAL,
      },
      cartId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "Carts", key: "id" },
      },
      skuId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "Skus", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CartItems");
  },
};
