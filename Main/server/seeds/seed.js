const db = require('../config/connection');
const { Places } = require('../models');

const placesData = require('./placesData.json');

db.once('open', async () => {
  await Places.deleteMany({});

  const dogplaces = await Places.insertMany(placesData);

  console.log('Dog Places seeded!');
  process.exit(0);
});
