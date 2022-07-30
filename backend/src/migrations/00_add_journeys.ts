/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const { getValidatedData } = require('../util/data');
const { DataTypes }  = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }: any) => {
    await queryInterface.createTable('journeys', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      departure: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      return: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureStationId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      departureStationName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      returnStationId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      returnStationName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      coveredDistance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    const data = await getValidatedData();
    let lastQuery;
    for (let i = 0; i < data.length; i += 100000) {
      const chunk = data.slice(i, i + 100000);
      lastQuery = await queryInterface.bulkInsert('journeys', chunk, { logging: false });
    }
    return lastQuery;
  },
  down: async ({ context: queryInterface }: any) => {
    await queryInterface.dropTable('journeys');
  }
};

export {};