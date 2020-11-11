// require('dotenv').config();


const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
// const resolvers = require('./resolvers'); //TODO WTF ????
// const mocks = require('./mocks');

let struct = require('./structure.json')


const mocks = {
  BlockItem: () => ({ 
    type: "ssss",
    id: "uid",
    caption: "cap",
    order: 1,
    scrollType: "noScroll",
    __typename: "CoreBlock"
  }),
  Int: () => Math.floor(Math.random()*10000000),
  Float: () => Math.random()*10000000,
  String: () => Math.random().toString(36).substring(7),
}

const resolvers = {
  Query: {
      getStructure: () => ({
          version: "1.0.0",
          blocks: struct

      }),
  },
}


const server = new ApolloServer({ typeDefs , resolvers, mocks,mockEntireSchema: false});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
