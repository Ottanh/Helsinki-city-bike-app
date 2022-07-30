/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const { getStationData } = require('../util/data');
const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }: any) => {
    await queryInterface.createTable('stations', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
      },
      fid: {
        type: DataTypes.INTEGER,
        unique: true
      },
      nimi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      namn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      osoite: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      adress: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      kaupunki: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      stad: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      operaattor: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      kapasiteet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      x: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      y: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
    const data = await getStationData();
    return await queryInterface.bulkInsert('stations', data, { logging: false });
  },
  down: async ({ context: queryInterface }: any) => {
    await queryInterface.dropTable('stations');
  }
};

export {};