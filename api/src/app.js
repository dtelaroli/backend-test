const express = require("express");
const parser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const config = require("./config");
const cors = require("cors");

const server = new ApolloServer(config.gql);

const app = express();

app.use(cors());
app.use(parser.json());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
