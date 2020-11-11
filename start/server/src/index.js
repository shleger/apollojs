// require('dotenv').config();


const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mocks = require('./mocks');



const server = new ApolloServer({ typeDefs , resolvers, mocks,mockEntireSchema: false});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
