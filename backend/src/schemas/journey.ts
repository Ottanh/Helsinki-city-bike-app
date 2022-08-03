import Joi from 'joi';
import { JourneyInterface } from '../interfaces/journey';

const JourneySchema = Joi.object<JourneyInterface>({
  departure: Joi.date()
    .max('now')
    .required(),
  return: Joi.date()
    .max('now')
    .required(),
  departure_station_id: Joi.number()
    .integer()
    .valid(Joi.in('$stations'))
    .required(),
  return_station_id: Joi.number()
    .integer()
    .valid(Joi.in('$stations'))
    .required(),
  covered_distance: Joi.number()
    .integer()
    .min(10)
    .required(),
  duration: Joi.number()
    .integer()
    .min(10)
    .required()
});

export const JourneyArray = Joi.array()
  .items(JourneySchema);


export default JourneySchema;
