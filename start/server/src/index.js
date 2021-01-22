// require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mocks = require('./mocks');


const server = new ApolloServer({ typeDefs, resolvers, mocks, mockEntireSchema: false });
const app = express();
app.use('/static', express.static(__dirname + '/public'));
server.applyMiddleware({ app });

// @include(unless null) ??

app.get("/", (req, res) => {
  res.status(301).redirect(`${server.graphqlPath}`)
})

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://http://mapp-db-jerry:8080${server.graphqlPath}`)
);

