/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import Journey from '../models/journey';
const router = express.Router();

router.get('/', async (_req, res) => {
  const journeys = await Journey.findAll({});
  res.json(journeys);
});

router.get('/:id', async (req, res) => {
  const journey = await Journey.findByPk(req.params.id);
  if(journey) {
    res.json(journey);
  } else {
    res.status(404).end();
  }
});


export default router;