const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// ------------------ SCHEMA ------------------
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// ------------------ RESOLVER ------------------
const root = {
  message: () => process.env.MESSAGE
};

// ------------------ SERVER ------------------
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/graphql`);
});