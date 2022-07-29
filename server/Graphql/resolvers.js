const Todo = require("../models/Todo.model");
const resolvers = {
  Query: {
    getAllTodos: async () => {
      return await Todo.find();
    },
    getOneTodoById: async (parent, args, context, info) => {
      const { id } = args;
      return await Todo.findById(id);
    },
  },
  Mutation: {
    createTodo: async (parent, args, context, info) => {
      const { title, description } = args.todo;
      const todo = new Todo({ title, description });
      await todo.save();
      return todo;
    },
    deleteTodo: async (parent, args, context, info) => {
      const { id } = args;
      await Todo.findByIdAndDelete(id);
      return "ok post delted";
    },
    updateTodo: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.todo;
      const updates={}
      if(title!==undefined){
        updates.title=title
      }
      if(description!==undefined){
        updates.description=description
      }
      const todo = await Todo.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
      return todo
    },
  },
};

module.exports = resolvers;
