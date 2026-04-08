const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/testdb');


const UserModel = mongoose.model('User', {
  name: String,
  age: Number
});


const schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(name: String!, age: Int!): User
  }
`);


const root = {
  users: async () => {
    return await UserModel.find();
  },

  addUser: async ({ name, age }) => {
    const user = new UserModel({ name, age });
    return await user.save();
  }
};


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Mongo GraphQL running at http://localhost:4000/graphql");
});