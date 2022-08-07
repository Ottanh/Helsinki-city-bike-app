/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import sequelize from 'sequelize';
import Journey from '../models/journey';
import Station from '../models/station';
const router = express.Router();
import { getPagination } from '../util/pagination';


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

  res.json({ ...station, ...stats});
});


export default router;