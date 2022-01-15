const path = require('path');
const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const { authMiddleware } = require('./utils/auth');

const myPlugin = {
    // Fires whenever a GraphQL request is received from a client.
    async requestDidStart(requestContext) {
      console.log('Request started! Query:\n' +
        requestContext.request.query);
        console.log(requestContext.request)
      return {
        // Fires whenever Apollo Server will parse a GraphQL
        // request to create its associated document AST.
        async parsingDidStart(requestContext) {
          console.log('Parsing started!');
        },
  
        // Fires whenever Apollo Server will validate a
        // request's document AST against your GraphQL schema.
        async validationDidStart(requestContext) {
          console.log('Validation started!');
        },
  
      }
    },
  };
// create  new Apollo server and pass in schema data
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    plugins: [
        myPlugin
      ]

});



// integrate Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`USE GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
