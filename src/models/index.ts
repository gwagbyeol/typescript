import Sequelize from 'sequelize';
import configObj from '../config/config';
import User from './users';
import Show from './shows';
import Seat from './seats';
import Reservation from './reservations';

const env = (process.env.NODE_ENV as 'production') || 'development';
const config = configObj[env];

export const sequelize = new Sequelize.Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
User.initiate(sequelize);
Show.initiate(sequelize);
Seat.initiate(sequelize);
Reservation.initiate(sequelize);

User.associate();
Show.associate();
Seat.associate();
Reservation.associate();

export { User, Show };
