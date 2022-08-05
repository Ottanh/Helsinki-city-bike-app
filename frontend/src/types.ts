export interface JourneyInterface {
    id: number;
    departure: string;
    return: string;
    departureStation: StationInterface;
    returnStation: StationInterface;
    coveredDistance: number;
    duration: number;        
}

export interface StationInterface {
  id: number;
  fid: number;
  nimi: string;
  namn: string;
  name: string;
  osoite: string;
  address: string;
  kaupunki: string | null;
  stad: string | null;
  operaattor: string | null;
  kapasiteet: string;
  x: number;
  y: number;
}