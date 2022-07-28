const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Todo {
    id: ID
    title: String
    description: String
  }
  type Query {
    getAllTodos: [Todo]
  }

  input TodoInput {
    title: String
    description: String
  }

  type Mutation {
    createTodo(todo: TodoInput): Todo
  }
`;

module.exports = typeDefs;
