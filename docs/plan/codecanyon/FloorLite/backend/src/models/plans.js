import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Plans = sequelize.define('Plans', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    defaultValue: ""
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trash: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  walls: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  items: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  },{
  timestamps: true,
  }
);

export default Plans