import express from 'express';
import { connectToDatabase } from './util/db';
import { PORT } from './util/config';
import './models/relationships';


const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});



const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

void start();