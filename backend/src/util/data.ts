import fs from 'fs';
import Papa from 'papaparse';

interface JourneySchema {
  departure: string;
  return: string;
  departureStationId: number;
  departureStationname: string;
  returnStationId: number;
  returnStationname: string;
  coveredDistance: number;
  duration: number;        
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
 * Reads all .csv files from working directory, converts them to JSON array and validates the data.
 * 
 * @returns Array containing validated journey objects
 */
export const getValidatedData = async () => {
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

  const validatedData = data.filter(row => {
    if(!row.departure || !(typeof row.departure === 'string')){
      return false;
    }
    if(!row.return || !(typeof row.return === 'string')){
      return false;
    }
    if(row.departureStationId === undefined 
      || row.departureStationId === null 
      || !(typeof row.departureStationId === 'number')
    ){
      return false;
    }
    if(!row.departureStationName 
      || !(typeof row.departureStationName === 'string')
    ){
      return false;
    }
    if(row.returnStationId === undefined 
      || row.returnStationId === null 
      || !(typeof row.returnStationId === 'number')
    ){
      return false;
    }
    if(!row.returnStationName || !(typeof row.returnStationName === 'string')){
      return false;
    }
    if(row.coveredDistance === undefined 
      || row.coveredDistance === null 
      || !(typeof row.coveredDistance === 'number') 
      || row.coveredDistance < 10
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

  return validatedData;
};




  