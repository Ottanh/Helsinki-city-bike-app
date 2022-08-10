/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import sequelize, { QueryTypes } from 'sequelize';
import Journey from '../models/journey';
import Station from '../models/station';
const router = express.Router();
import { getPagination } from '../util/pagination';
import { sequelize as sequelizeInstance } from '../util/db'


router.get('/', async (req, res) => {
  const page = parseInt(req.query.page as string);
  const size = parseInt(req.query.size as string);
  const { limit, offset } = getPagination(page, size);

  const stations = await Station.findAll({
    limit,
    offset
  });
  res.json(stations);
});

router.get('/:id', async (req, res) => {
  const station = await Station.findByPk(req.params.id, { raw: true });
  if(!station){
    res.status(404).end();
  }

  const stats = await Journey.findOne({
    raw: true,
    attributes: [
      [sequelize.literal(`AVG(CASE WHEN departure_station_id = ${req.params.id} THEN covered_distance END)`), 'avg_journey_started'],
      [sequelize.literal(`COUNT(CASE WHEN departure_station_id = ${req.params.id} THEN 1 END)`), 'n_started'],
      [sequelize.literal(`AVG(CASE WHEN return_station_id = ${req.params.id} THEN covered_distance END)`), 'avg_journey_finished'],
      [sequelize.literal(`COUNT(CASE WHEN return_station_id = ${req.params.id} THEN 1 END)`), 'n_finished'],
    ]
  })

  
  const popReturnStations = await sequelizeInstance.query(`
    SELECT stations.name, n_journeys
    FROM stations JOIN (
      SELECT return_station_id, COUNT(return_station_id) as n_journeys
      FROM journeys
      WHERE departure_station_id=${req.params.id}
      GROUP BY return_station_id
      ORDER BY n_journeys DESC
      LIMIT 5
    ) as J ON stations.id = J.return_station_id
    ORDER BY n_journeys DESC`,
    {
      type: QueryTypes.SELECT
    }
  )

  const popStartStations = await sequelizeInstance.query(`
    SELECT stations.name, n_journeys
    FROM stations JOIN (
      SELECT departure_station_id, COUNT(departure_station_id) as n_journeys
      FROM journeys
      WHERE return_station_id=${req.params.id}
      GROUP BY departure_station_id
      ORDER BY n_journeys DESC
      LIMIT 5
    ) as J ON stations.id = J.departure_station_id
    ORDER BY n_journeys DESC`,
    {
      type: QueryTypes.SELECT
    }
  )

  res.json({ ...station, ...stats, popReturnStations, popStartStations});
});

router.get('/:id/pop_departure', async (req, res) => {
  const station = await Station.findByPk(req.params.id, { raw: true });
  if(!station){
    res.status(404).end();
  }

  const popDepartureStations = await sequelizeInstance.query(`
    SELECT stations.name, stations.adress, stations.kaupunki, n_journeys
    FROM stations JOIN (
      SELECT departure_station_id, COUNT(departure_station_id) as n_journeys
      FROM journeys
      WHERE return_station_id=${req.params.id}
      GROUP BY departure_station_id
      ORDER BY n_journeys DESC
      LIMIT 5
    ) as J ON stations.id = J.departure_station_id
    ORDER BY n_journeys DESC`,
    {
      type: QueryTypes.SELECT
    }
  )

  res.json(popDepartureStations);
});

router.get('/:id/pop_return', async (req, res) => {
  const station = await Station.findByPk(req.params.id, { raw: true });
  if(!station){
    res.status(404).end();
  }

  const popReturnStations = await sequelizeInstance.query(`
    SELECT stations.name, stations.adress, stations.kaupunki, n_journeys
    FROM stations JOIN (
      SELECT return_station_id, COUNT(return_station_id) as n_journeys
      FROM journeys
      WHERE departure_station_id=${req.params.id}
      GROUP BY return_station_id
      ORDER BY n_journeys DESC
      LIMIT 5
    ) as J ON stations.id = J.return_station_id
    ORDER BY n_journeys DESC`,
    {
      type: QueryTypes.SELECT
    }
  )

  res.json(popReturnStations);
});

export default router;