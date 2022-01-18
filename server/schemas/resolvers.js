const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts")
          .populate("friends");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    users: async () => {
      return (
        User.find()
          // .select('-username')
          .select("-__v -password")
          .populate("friends")
          .populate("posts")
      );
    },
    user: async (parent, { username }) => {
      return (
        User.findOne({ username })
          // .select('-username')
          .select("-__v -password")
          .populate("friends")
          .populate("posts")
      );
    },
    env: async (parent, args) => {
      return ({
        value: "3"
      })
    }
  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    // addPost: async (parent, args, context) => {
    //   if (context.user) {
    //     const post = await Post.create({
    //       ...args,
    //       username: context.user.username,
    //     });
    //     console.log(args)

    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { posts: post._id } },
    //       { new: true }
    //     );

    //     return post;
    //   }

    //   throw new AuthenticationError("You need to be logged in!");
    // },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: { commentBody, username: context.user.username },
            },
          },
          { new: true }
        );

        return updatedPost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addPost: async (parent, args, context) => {
      console.log("RESOLVER HIT");
        if (context.user) {
            const post = await Post.create({
              ...args,
              username: context.user.username
            });
            console.log(post);
            await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { favorites: post } },
              { new: true }
            );
    
            return post;
          }
    
          throw new AuthenticationError("You need to be logged in!");
    },
    // for future implementation
    addFriend: async (parent, { friendId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
          //   add friendId to friend's array
          // can't be friends wiht same person twice
          // $addToSet instead of $push prevents duplicates
            { $addToSet: { friends: friendId } },
            { new: true }
          ).populate("friends");
  
          return updatedUser;
        }
  
        throw new AuthenticationError("You need to be logged in!");
      },
      removePost: async (parent, args, context) => {
        if (context.user) {
          const post = await Post.findOneAndDelete({
            ...args,
          });
          console.log(post)
          await User.findByIdAndUpdate(
            {_id: context.user._id },
            { $pull: { favorites: post } },
            { new: true}
          )
          
          return post;
        }

        throw new AuthenticationError("You need to be logged in!");
      }
  },
};

module.exports = resolvers;
