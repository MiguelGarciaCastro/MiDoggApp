const { Places, Matchup } = require('../models');

const resolvers = {
  Query: {
    places: async () => {
      return Places.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, placesNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`places${placesNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
