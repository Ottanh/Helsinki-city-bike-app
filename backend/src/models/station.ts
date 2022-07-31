import { 
  DataTypes, InferAttributes, 
  InferCreationAttributes, 
  Model 
} from 'sequelize';
import { sequelize } from '../util/db';


class Station extends Model<InferAttributes<Station>, InferCreationAttributes<Station>> {
  declare id: number;
  declare fid: number;
  declare nimi: string;
  declare namn: string;
  declare name: string;
  declare osoite: string;
  declare adress: string;
  declare kaupunki: string | null;
  declare stad: string | null;
  declare operaattor: string | null;
  declare kapasiteet: string;
  declare x: number;
  declare y: number;
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
  timestamps: false,
  underscored: true,
  modelName: 'station',
});


export default Station;