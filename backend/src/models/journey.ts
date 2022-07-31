import { 
  CreationOptional, 
  DataTypes, 
  ForeignKey, 
  InferAttributes, 
  InferCreationAttributes,
  Model 
} from 'sequelize';
import { sequelize } from '../util/db';
import Station from './station';



class Journey extends Model<InferAttributes<Journey>, InferCreationAttributes<Journey>> {
  declare id: CreationOptional<number>;
  declare departure: Date;
  declare return: Date;
  declare departureStationId: ForeignKey<Station['id']>;
  declare departureStationName: string;
  declare returnStationId: ForeignKey<Station['id']>;
  declare returnStationName: string;
  declare coveredDistance: number;
  declare duration: number;
}

Journey.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  departure: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      customValidator(value: string | number | Date) {
        if (new Date(value) < new Date()) {
          throw new Error("invalid date");
        }
      }
    },
  },
  return: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      customValidator(value: string | number | Date) {
        if (new Date(value) < new Date()) {
          throw new Error("invalid date");
        }
      }
    },
  },
  departureStationName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  returnStationName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  coveredDistance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 10
    }
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 10
    }
  },
}, {
  sequelize,
  underscored: true,
  modelName: 'journey',
});



export default Journey;