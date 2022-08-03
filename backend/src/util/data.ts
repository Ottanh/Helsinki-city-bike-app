import fs from 'fs';
import Papa from 'papaparse';
import { JourneyInterface } from '../interfaces/journey';
import { StationInterface } from '../interfaces/station';
import { JourneyArray } from '../schemas/journey';
import { StationArray } from '../schemas/station';

const readFile = async (fileName: string, type: 'station' | 'journey') => {
  let path: string;
  let headers: string;
  if(type === 'station'){
    path = `./data/stations/${fileName}`;
    headers = 'fid,id,nimi,namn,name,osoite,adress,kaupunki,stad,operaattor,kapasiteet,x,y';
  } else {
    path = `./data/journeys/${fileName}`;
    headers = 'departure,return,departure_station_id,departure_station_name,return_station_id,return_station_name,covered_distance,duration';
  }

  return new Promise<string>(resolve => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const lines = data.split('\n');
      lines.splice(0,1);
      lines.unshift(headers);
      resolve(lines.join('\n'));
    });
  });
};


/**
 * Reads all .station.csv files from working directory and converts them to JSON array,
 * which is then validated by StationSchema.
 * 
 * @returns Array containing station objects
 */
 export const getStationData = async () => {
  console.log('Fetching station data');
  let files = fs.readdirSync('./data/stations');
  files = files.filter(file => file.match(new RegExp(`.*.csv`, 'ig')));

  let data: unknown[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file);
    const csv = await readFile(file, 'station');
    data = data.concat(Papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true }).data);
  }

  let validatedData: StationInterface[] = [];
  for (let i = 0; i < data.length; i += 10000) {
    process.stdout.write(`Validating... [${(i/data.length*100).toFixed(1)}%]\r`);
    const chunk = data.slice(i, i + 10000);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, value } = StationArray.validate(
      chunk,
      {
        stripUnknown: { arrays: true, objects: true }
      }
    );
    if(error) {
      console.log(error);
    }
    validatedData = validatedData.concat(value as StationInterface[]);
  }
  process.stdout.write('');
  console.log('Validation complete');
  return validatedData;
};


/**
 * Reads all .csv files from working directory and converts them to JSON array,
 * which is then validated by JourneySchema.
 * 
 * @param stations Used to validate journey data
 * @returns Array containing validated journey objects
 */
export const getJourneyData = async (stations: StationInterface[]) => {
  console.log('Fetching journey data');
  const initial: number[] = [];
  const stationsIds = stations.reduce((total, current) => {
    return total.concat(current.id);
  }, initial);

  let files = fs.readdirSync('./data/journeys');
  files = files.filter( file => file.match(new RegExp(`.*.csv`, 'ig')));

  let data: unknown[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file);
    const csv = await readFile(file, 'journey');
    data = data.concat(Papa.parse(csv, { header: true, dynamicTyping: true }).data);
  }

  let validatedData: JourneyInterface[] = [];
  for (let i = 0; i < data.length; i += 10000) {
    process.stdout.write(`Validating... [${(i/data.length*100).toFixed(1)}%]\r`);
    const chunk = data.slice(i, i + 10000);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, value } = JourneyArray.validate(
      chunk, 
      { 
        context: { stations: stationsIds },
        stripUnknown: { arrays: true, objects: true }
      }
    );
    if(error) {
      console.log(error.message);
    } 
    validatedData = validatedData.concat(value as JourneyInterface[]);
  }
  process.stdout.write('');
  console.log('Validation complete');
  return validatedData;   
};




  