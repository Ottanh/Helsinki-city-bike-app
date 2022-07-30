import { DataTypes } from 'sequelize';
import { sequelize } from '../util/db';
import {Column, Model, Table,} from 'sequelize-typescript';


@Table
class Journey extends Model {
  @Column
  departure!: Date;
  @Column
  return!: Date;
  @Column
  departureStationId!: number;
  @Column
  departureStationName!: string;
  @Column
  returnStationId!: number;
  @Column
  returnStationName!: string;
  @Column
  coveredDistance!: number;
  @Column
  duration!: number;
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
  departureStationId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  departureStationName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  returnStationId: {
    type: DataTypes.INTEGER,
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