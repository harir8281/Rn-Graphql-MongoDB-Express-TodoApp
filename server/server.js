const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./Graphql/typeDef");
const resolvers = require("./Graphql/resolvers");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send("Hello from exress apollo");
  });

  await mongoose.connect("mongodb://localhost:27017/todos_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("mongoose connected...")

  app.listen(4000, () => console.log("server is running on port 4000"));
}

startServer();
