// require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
// const resolvers = require('./resolvers'); //TODO WTF ????
// const mocks = require('./mocks');



let struct = require('./public/structure.json')
const mocks = {
  BlockItem: () => ({
    type: "ssss",
    id: "uid",
    caption: "cap",
    order: 1,
    scrollType: "noScroll",
    __typename: "CoreBlock"
  }),
  Int: () => Math.floor(Math.random() * 10000000),
  Float: () => Math.random() * 10000000,
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
const server = new ApolloServer({ typeDefs, resolvers, mocks, mockEntireSchema: false });
const app = express();
app.use('/static', express.static(__dirname + '/public'));
server.applyMiddleware({ app });


app.get("/", (req, res) => {
  res.status(301).redirect(`${server.graphqlPath}`)
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

