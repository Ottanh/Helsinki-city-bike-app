import express from 'express';
import { connectToDatabase } from './util/db';
import { PORT } from './util/config';
import './models/relationships';
import journeyRouter from './controllers/journey';
import stationRouter from './controllers/stations';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.resolve(__dirname, '../../frontend/build')));
}

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/journey', journeyRouter);
app.use('/api/station', stationRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

void start();