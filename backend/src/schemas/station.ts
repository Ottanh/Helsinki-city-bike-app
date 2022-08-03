import Joi from 'joi';


const StationSchema = Joi.object({
  id: Joi.number()
    .integer()
    .positive()
    .required(),
  fid: Joi.number()
    .integer()
    .positive()
    .required(),
  nimi: Joi.string()
    .required(),
  namn: Joi.string()
  .required(),
  name: Joi.string()
  .required(),
  osoite: Joi.string()
  .required(),
  adress: Joi.string()
  .required(),
  kaupunki: Joi.string(),
  stad: Joi.string(),
  operaattor: Joi.string(),
  kapasiteet: Joi.number()
    .integer()
    .positive()
    .required(),
  x: Joi.number()
  .required(),
  y: Joi.number()
  .required(),
});

export const StationArray = Joi.array()
  .unique((a, b) => (a.id === b.id || a.fid === b.fid))
  .items(StationSchema);


export default StationSchema;