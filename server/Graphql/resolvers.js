const Todo = require("../models/Todo.model");
const resolvers = {
  Query: {
    getAllTodos: async () => {
      return await Todo.find();
    },
  },
  Mutation: {
    createTodo: async (parent, args, context, info) => {
      const { title, description } = args.todo;
      const todo = new Todo({ title, description });
      await todo.save();
      return todo;
    },
  },
};

module.exports = resolvers;
