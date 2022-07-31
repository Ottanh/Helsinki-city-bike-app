/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
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
  const station = await Station.findByPk(req.params.id);
  if(station) {
    res.json(station);
  } else {
    res.status(404).end();
  }
});


export default router;