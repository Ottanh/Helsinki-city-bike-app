/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const { DataTypes }  = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }: any) => {
    await queryInterface.changeColumn(
      'journeys',
      'departure_station_id',
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'stations', key: 'id' },
      }
    );
    await queryInterface.changeColumn(
      'journeys',
      'return_station_id',
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'stations', key: 'id' },
      }
    );
  },
  down: async ({ context: queryInterface }: any) => {
    await queryInterface.changeColumn(
      'journeys',
      'departure_station_id',
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    );
    await queryInterface.changeColumn(
      'journeys',
      'return_station_id',
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    );
  }
};

export {};