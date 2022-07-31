/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import Journey from '../models/journey';
const router = express.Router();

const getPagination = (page: number, size: number) => {
  const limit = size ? size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};


router.get('/', async (req, res) => {
  const page = parseInt(req.query.page as string);
  const size = parseInt(req.query.size as string);
  const { limit, offset } = getPagination(page, size);

  const journeys = await Journey.findAll({
    limit,
    offset
  });
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