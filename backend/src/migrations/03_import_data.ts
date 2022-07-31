/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const { getStationData, getJourneyData } = require('../util/data');


module.exports = {
  up: async ({ context: queryInterface }: any) => {

    const stationData = await getStationData();
    await queryInterface.bulkInsert('stations', stationData, { logging: false });

    const data = await getJourneyData(stationData);
    let lastQuery: any;
    for (let i = 0; i < data.length; i += 100000) {
      console.log(i);
      const chunk = data.slice(i, i + 100000);
      lastQuery = await queryInterface.bulkInsert('journeys', chunk, { logging: false });
    }
    return lastQuery;

  },
  down: async ({ context: queryInterface }: any) => {
    await queryInterface.dropTable('stations');
  }
};

export {};