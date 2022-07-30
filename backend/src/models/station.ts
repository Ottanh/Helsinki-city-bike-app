import { DataTypes } from 'sequelize';
import { sequelize } from '../util/db';
import {Column, Model, Table,} from 'sequelize-typescript';


@Table
class Station extends Model {
  @Column
  fid!: number;
  @Column
  id!: number;
  @Column
  nimi!: string;
  @Column
  namn!: string;
  @Column
  name!: string;
  @Column
  osoite!: string;
  @Column
  adress!: string;
  @Column
  kaupunki?: string;
  @Column
  stad?: string;
  @Column
  operaattor?: string;
  @Column
  kapasiteet!: string;
  @Column
  x!: number;
  @Column
  y!: number;
}

Station.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true
  },
  fid: {
    type: DataTypes.INTEGER,
    unique: true
  },
  nimi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  namn: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  osoite: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  adress: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  kaupunki: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stad: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  operaattor: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  kapasiteet: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  x: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  y: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  underscored: true,
  modelName: 'station',
});


export default Station;