/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
      departure_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      departure_station_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      return_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      return_station_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      covered_distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async ({ context: queryInterface }: any) => {
    await queryInterface.dropTable('journeys');
  }
};

export {};