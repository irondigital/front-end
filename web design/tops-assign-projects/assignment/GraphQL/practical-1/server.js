const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 }
];

let products = [
  { id: 1, name: "Laptop", price: 80000 },
  { id: 2, name: "Phone", price: 30000 }
];


const schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Product {
    id: ID
    name: String
    price: Float
  }

  type Query {
    hello: String
    getUser(id: ID!): User
    users: [User]
    products: [Product]
  }

  type Mutation {
    addUser(name: String!, age: Int!): User
    addProduct(name: String!, price: Float!): Product
  }
`);


const root = {

 
  hello: () => "Hello GraphQL 🚀",


  getUser: ({ id }) => {
    return users.find(user => user.id == id);
  },


  users: () => users,

  
  products: () => products,

  
  addUser: ({ name, age }) => {
    const newUser = {
      id: users.length + 1,
      name,
      age
    };
    users.push(newUser);
    return newUser;
  },

  
  addProduct: ({ name, price }) => {
    const newProduct = {
      id: products.length + 1,
      name,
      price
    };
    products.push(newProduct);
    return newProduct;
  }
};


const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});