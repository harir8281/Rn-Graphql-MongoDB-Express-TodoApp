const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Todo {
    id: ID
    title: String
    description: String
  }
  type Query {
    getAllTodos: [Todo]
    getOneTodoById(id:ID):Todo
  }

  input TodoInput {
    title: String
    description: String
  }

  type Mutation {
    createTodo(todo: TodoInput): Todo
    deleteTodo(id:ID):String
    updateTodo(id:ID,todo:TodoInput):Todo
  }
`;

module.exports = typeDefs;
