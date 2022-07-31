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

  const journeys = await Journey.findAll({
    limit,
    offset,
    include: [
      {
        model: Station,
        as: 'departureStation'
      },
      {
        model: Station,
        as: 'returnStation'
      }
    ],
    attributes: {
      exclude: ['departureStationId', 'returnStationId']
    }
  });
  res.json(journeys);
});

router.get('/:id', async (req, res) => {
  const journey = await Journey.findByPk(req.params.id, {
    include: [
      {
        model: Station,
        as: 'departureStation'
      },
      {
        model: Station,
        as: 'returnStation'
      }
    ],
    attributes: {
      exclude: ['departureStationId', 'returnStationId']
    }
  });
  if(journey) {
    res.json(journey);
  } else {
    res.status(404).end();
  }
});


export default router;