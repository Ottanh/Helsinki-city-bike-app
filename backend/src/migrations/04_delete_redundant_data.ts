/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */


module.exports = {
  up: async ({ context: queryInterface }: any) => {
    await queryInterface.removeColumn(
      'journeys',
      'departure_station_name'
    );
    await queryInterface.removeColumn(
      'journeys',
      'return_station_name'
    );
  },
  down: async ({ context: queryInterface }: any) => {
    await queryInterface.removeColumn(
      'journeys',
      'departure_station_name'
    );
    await queryInterface.removeColumn(
      'journeys',
      'return_station_name'
    );
  }
};

export {};