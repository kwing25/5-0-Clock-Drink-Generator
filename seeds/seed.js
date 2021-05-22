const sequelize = require('../config/connection');
const { User, Saveddrink } = require('../models');

const userData = require('./userData.json');
const saveddrinkData = require('./saveddrinkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const saveddrink of saveddrinkData) {
    await Saveddrink.create({
      ...saveddrink,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
