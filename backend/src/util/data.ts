import fs from 'fs';
import Papa from 'papaparse';

interface JourneySchema {
  departure: string;
  return: string;
  departure_station_id: number;
  departure_station_name: string;
  return_station_id: number;
  return_station_name: string;
  covered_distance: number;
  duration: number;        
}

interface StationSchema {
  id: number;
  fid: number;
  nimi: string;
  namn: string;
  name: string;
  osoite: string;
  adress: string;
  kaupunki: string | null;
  stad: string | null;
  operaattor: string | null;
  kapasiteet: string;
  x: number;
  y: number;
}

const readFile = async (fileName: string) => {
  return new Promise<string>(resolve => {
    fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if (data.charCodeAt(0) === 0xFEFF) {
        resolve(data.slice(1));
      }
      resolve(data);
    });
  });
};

/**
 * Reads all .station.csv files from working directory and converts them to JSON array.
 * 
 * @returns Array containing station objects
 */
 export const getStationData = async () => {
  let files = fs.readdirSync('.');
  files = files.filter( file => file.match(new RegExp(`.*.stations.csv`, 'ig')));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: any[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file);
    const csv = await readFile(file);
    data = data.concat(Papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true }).data);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};


/**
 * Reads all .csv files from working directory, converts them to JSON array and validates the data.
 * 
 * @param stations Station ids used to validate journey data
 * @returns Array containing validated journey objects
 */
export const getJourneyData = async (stations: StationSchema[]) => {

  const initial: number[] = [];
  const stationsIds = stations.reduce((total, current) => {
    return total.concat(current.id);
  }, initial);

  console.log(stationsIds);

  let files = fs.readdirSync('.');
  files = files.filter( file => file.match(new RegExp(`.*.csv`, 'ig')));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: any[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file);
    const csv = await readFile(file);
    data = data.concat(Papa.parse(csv, { header: true, dynamicTyping: true }).data);
  }

  console.log(data.length);

  const validatedData = data.filter(row => {
    if(!row.departure || !(typeof row.departure === 'string')){
      return false;
    }
    if(!row.return || !(typeof row.return === 'string')){
      return false;
    }
    if(row.departure_station_id === undefined 
      || row.departure_station_id === null 
      || !(typeof row.departure_station_id === 'number')
      || !stationsIds.includes(row.departure_station_id as number)
    ){
      return false;
    }
    if(!row.departure_station_name 
      || !(typeof row.departure_station_name === 'string')
    ){
      return false;
    }
    if(row.return_station_id === undefined 
      || row.return_station_id === null 
      || !(typeof row.return_station_id === 'number')
      || !stationsIds.includes(row.return_station_id as number)
    ){
      return false;
    }
    if(!row.return_station_name || !(typeof row.return_station_name === 'string')){
      return false;
    }
    if(row.covered_distance === undefined 
      || row.covered_distance === null 
      || !(typeof row.covered_distance === 'number') 
      || row.covered_distance < 10
    ){
      return false;
    }
    if(row.duration === undefined 
      || row.duration === null 
      || !(typeof row.duration === 'number') 
      || row.duration < 10
    ){
      return false;
    }
    return true;
  }) as JourneySchema[];

  console.log(validatedData.length);

  return validatedData;
};




  