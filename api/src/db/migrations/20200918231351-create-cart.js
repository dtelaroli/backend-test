"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Carts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      totalAmount: {
        allowNull: false,
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable("Carts");
  },
};
