/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
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

  const n_starts = await Journey.count({ col: '*', where: { departureStationId: req.params.id }})
  const n_ends = await Journey.count({ col: '*', where: { returnStationId: req.params.id }})

  res.json({ ...station, n_starts, n_ends });

});


export default router;