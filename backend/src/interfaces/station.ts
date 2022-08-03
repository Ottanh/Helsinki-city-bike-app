export interface StationInterface {
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
  kapasiteet: number;
  x: number;
  y: number;
}