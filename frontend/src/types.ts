export interface Journey {
    id: number;
    departure: string;
    return: string;
    departureStation: Station;
    returnStation: Station;
    coveredDistance: number;
    duration: number;        
}

export interface Station {
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