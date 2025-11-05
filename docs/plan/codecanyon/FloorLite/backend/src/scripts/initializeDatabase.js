import { nanoid } from 'nanoid';
import sequelize from '../config/database.js';
import Plans from '../models/plans.js';

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Adding example data
    // await Plans.bulkCreate([
    //   { id: nanoid(12), name: 'My first floor plan.', walls: [], items: []},
    // ]);
  } catch (error) {
    console.error('Unable to initialize the database:', error);
  } finally {
    await sequelize.close();
  }
};

initializeDatabase();